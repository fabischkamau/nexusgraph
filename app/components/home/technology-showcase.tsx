"use client";

import { useEffect, useRef } from "react";
import { Activity, Layers3, Package } from "lucide-react";
import { Button } from "~/components/ui/button";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export default function TechnologyShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 20;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.enableZoom = true;
    controls.zoomSpeed = 0.7;

    // Create central node
    const centralNodeGeometry = new THREE.SphereGeometry(1, 32, 32);
    const centralNodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.8,
    });
    const centralNode = new THREE.Mesh(
      centralNodeGeometry,
      centralNodeMaterial
    );

    // Add pulse effect to central node
    centralNode.userData = {
      pulseSpeed: 0.005,
      pulseScale: 1.0,
      pulseDirection: 1,
      originalScale: 1.0,
    };

    scene.add(centralNode);

    // Create surrounding nodes
    const nodeCount = 40;
    const nodes: any = [];
    const nodeGeometry = new THREE.SphereGeometry(0.4, 16, 16);

    // Create node materials with different colors - added orange
    const nodeMaterials = [
      new THREE.MeshBasicMaterial({
        color: 0x7b42f6, // purple
        transparent: true,
        opacity: 0.8,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x00e5ff, // cyan
        transparent: true,
        opacity: 0.8,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x5a5aff, // blue
        transparent: true,
        opacity: 0.8,
      }),
      new THREE.MeshBasicMaterial({
        color: 0xff7f00, // orange
        transparent: true,
        opacity: 0.8,
      }),
    ];

    // Store all connections for updating
    const connections: any = [];
    const centralConnections: any = [];
    const dataPackets: any = [];

    // Create packet geometries for data movement
    const packetGeometry = new THREE.SphereGeometry(0.15, 8, 8);

    // Data packet materials with different colors
    const packetMaterials = [
      new THREE.MeshBasicMaterial({
        color: 0xffff00,
        transparent: true,
        opacity: 0.8,
      }), // yellow
      new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        transparent: true,
        opacity: 0.8,
      }), // green
      new THREE.MeshBasicMaterial({
        color: 0xff00ff,
        transparent: true,
        opacity: 0.8,
      }), // magenta
    ];

    // Create nodes in a sphere around the central node
    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(
        nodeGeometry,
        nodeMaterials[Math.floor(Math.random() * nodeMaterials.length)]
      );

      // Position nodes in a sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 8;

      node.position.x = radius * Math.sin(phi) * Math.cos(theta);
      node.position.y = radius * Math.sin(phi) * Math.sin(theta);
      node.position.z = radius * Math.cos(phi);

      // Add pulse effect to nodes
      node.userData = {
        pulseSpeed: 0.002 + Math.random() * 0.004,
        pulseScale: 1.0,
        pulseDirection: 1,
        originalScale: 1.0,
        nodeType: Math.floor(Math.random() * 4), // Different node types
      };

      scene.add(node);
      nodes.push(node);

      // Create link to central node
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x3a3a5a,
        transparent: true,
        opacity: 0.3,
      });

      const geometry = new THREE.BufferGeometry().setFromPoints([
        centralNode.position,
        node.position,
      ]);

      const line = new THREE.Line(geometry, lineMaterial);
      scene.add(line);

      // Store the connection for data movement
      centralConnections.push({
        line: line,
        source: "central",
        target: i,
        node: node,
        dataFrequency: 3 + Math.floor(Math.random() * 7), // How often data packets are created
        lastPacketTime: Math.floor(Math.random() * 100), // Randomize initial timing
        isActive: Math.random() > 0.3, // Some connections are more active
      });
    }

    // Create connections between surrounding nodes
    const connectionCount = 30;

    for (let i = 0; i < connectionCount; i++) {
      const sourceIndex = Math.floor(Math.random() * nodeCount);
      const targetIndex = Math.floor(Math.random() * nodeCount);

      if (sourceIndex !== targetIndex) {
        const lineMaterial = new THREE.LineBasicMaterial({
          color: 0x3a3a5a,
          transparent: true,
          opacity: 0.2,
        });

        const geometry = new THREE.BufferGeometry().setFromPoints([
          nodes[sourceIndex].position,
          nodes[targetIndex].position,
        ]);

        const line = new THREE.Line(geometry, lineMaterial);
        scene.add(line);

        connections.push({
          line: line,
          source: sourceIndex,
          target: targetIndex,
          dataFrequency: 5 + Math.floor(Math.random() * 10),
          lastPacketTime: Math.floor(Math.random() * 100),
          isActive: Math.random() > 0.6, // Fewer active connections between nodes
        });
      }
    }

    // Animation loop
    let frameCount = 0;
    const animate = () => {
      frameCount++;
      requestAnimationFrame(animate);

      // Update controls
      controls.update();

      // Rotate the entire graph slowly
      scene.rotation.y += 0.001;
      scene.rotation.x += 0.0005;

      // Pulse effect for central node
      centralNode.userData.pulseScale +=
        centralNode.userData.pulseSpeed * centralNode.userData.pulseDirection;

      if (centralNode.userData.pulseScale < 0.9) {
        centralNode.userData.pulseScale = 0.9;
        centralNode.userData.pulseDirection = 1;
      } else if (centralNode.userData.pulseScale > 1.1) {
        centralNode.userData.pulseScale = 1.1;
        centralNode.userData.pulseDirection = -1;
      }

      centralNode.scale.set(
        centralNode.userData.pulseScale,
        centralNode.userData.pulseScale,
        centralNode.userData.pulseScale
      );

      // Pulse effect for all nodes
      nodes.forEach((node: any) => {
        if (Math.random() > 0.99) {
          node.userData.pulseDirection *= -1;
        }

        node.userData.pulseScale +=
          node.userData.pulseSpeed * node.userData.pulseDirection;

        if (node.userData.pulseScale < 0.8) {
          node.userData.pulseScale = 0.8;
          node.userData.pulseDirection = 1;
        } else if (node.userData.pulseScale > 1.2) {
          node.userData.pulseScale = 1.2;
          node.userData.pulseDirection = -1;
        }

        node.scale.set(
          node.userData.pulseScale,
          node.userData.pulseScale,
          node.userData.pulseScale
        );
      });

      // Update connection positions between nodes
      connections.forEach((connection: any) => {
        connection.line.geometry.setFromPoints([
          nodes[connection.source].position,
          nodes[connection.target].position,
        ]);
        connection.line.geometry.attributes.position.needsUpdate = true;

        // Create new data packets between nodes
        if (
          connection.isActive &&
          frameCount % 60 === 0 &&
          Math.random() < 0.1
        ) {
          if (
            frameCount - connection.lastPacketTime >
            connection.dataFrequency * 60
          ) {
            const direction = Math.random() > 0.5 ? 1 : -1; // Randomize packet direction

            const packet = new THREE.Mesh(
              packetGeometry,
              packetMaterials[
                Math.floor(Math.random() * packetMaterials.length)
              ]
            );

            // Determine source and target based on direction
            const sourceIndex =
              direction === 1 ? connection.source : connection.target;
            const targetIndex =
              direction === 1 ? connection.target : connection.source;

            // Start at source position
            packet.position.copy(nodes[sourceIndex].position);

            // Store packet metadata
            packet.userData = {
              source: nodes[sourceIndex].position,
              target: nodes[targetIndex].position,
              progress: 0,
              speed: 0.01 + Math.random() * 0.015,
            };

            scene.add(packet);
            dataPackets.push(packet);
            connection.lastPacketTime = frameCount;
          }
        }
      });

      // Update central connections and create packets from central node
      centralConnections.forEach((connection: any) => {
        // Create new data packets from central node to surrounding nodes
        if (
          connection.isActive &&
          frameCount % 30 === 0 &&
          Math.random() < 0.15
        ) {
          if (
            frameCount - connection.lastPacketTime >
            connection.dataFrequency * 30
          ) {
            // Randomly determine direction (to or from central node)
            const direction = Math.random() > 0.6 ? 1 : -1; // More often from central to nodes

            const packet = new THREE.Mesh(
              packetGeometry,
              packetMaterials[
                Math.floor(Math.random() * packetMaterials.length)
              ]
            );

            // Set positions based on direction
            if (direction === 1) {
              // Central to node
              packet.position.copy(centralNode.position);
              packet.userData = {
                source: centralNode.position,
                target: connection.node.position,
                progress: 0,
                speed: 0.01 + Math.random() * 0.02,
              };
            } else {
              // Node to central
              packet.position.copy(connection.node.position);
              packet.userData = {
                source: connection.node.position,
                target: centralNode.position,
                progress: 0,
                speed: 0.01 + Math.random() * 0.02,
              };
            }

            scene.add(packet);
            dataPackets.push(packet);
            connection.lastPacketTime = frameCount;
          }
        }
      });

      // Update data packets
      for (let i = dataPackets.length - 1; i >= 0; i--) {
        const packet = dataPackets[i];
        packet.userData.progress += packet.userData.speed;

        if (packet.userData.progress >= 1) {
          // Remove packet when it reaches the target
          scene.remove(packet);
          dataPackets.splice(i, 1);
        } else {
          // Move packet along the path
          const sourcePos = packet.userData.source;
          const targetPos = packet.userData.target;

          packet.position.x =
            sourcePos.x +
            (targetPos.x - sourcePos.x) * packet.userData.progress;
          packet.position.y =
            sourcePos.y +
            (targetPos.y - sourcePos.y) * packet.userData.progress;
          packet.position.z =
            sourcePos.z +
            (targetPos.z - sourcePos.z) * packet.userData.progress;

          // Scale packet to create pulse effect while moving
          const scale =
            1 + 0.2 * Math.sin(packet.userData.progress * Math.PI * 3);
          packet.scale.set(scale, scale, scale);

          // Make packets glow brighter as they move
          if (packet.material instanceof THREE.MeshBasicMaterial) {
            packet.material.opacity =
              0.7 + 0.3 * Math.sin(packet.userData.progress * Math.PI * 2);
          }
        }
      }

      renderer.render(scene, camera);
    };

    // Handle container resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (
        containerRef.current &&
        containerRef.current.contains(renderer.domElement)
      ) {
        containerRef.current.removeChild(renderer.domElement);
      }

      // Dispose resources
      centralNodeGeometry.dispose();
      centralNodeMaterial.dispose();
      packetGeometry.dispose();

      packetMaterials.forEach((material) => {
        material.dispose();
      });

      nodes.forEach((node: any) => {
        node.geometry.dispose();
        if (node.material instanceof THREE.Material) {
          node.material.dispose();
        }
      });

      connections.forEach((connection: any) => {
        connection.line.geometry.dispose();
        if (connection.line.material instanceof THREE.Material) {
          connection.line.material.dispose();
        }
      });

      centralConnections.forEach((connection: any) => {
        connection.line.geometry.dispose();
        if (connection.line.material instanceof THREE.Material) {
          connection.line.material.dispose();
        }
      });

      dataPackets.forEach((packet: any) => {
        if (packet.geometry) packet.geometry.dispose();
        if (packet.material instanceof THREE.Material) {
          packet.material.dispose();
        }
      });
    };
  }, []);

  return (
    <section id="technology" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient-purple opacity-10 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Advanced Technology Stack
            </h2>
            <p className="text-secondary-text text-lg mb-8">
              Our proprietary technology combines cutting-edge RAG systems with
              sophisticated knowledge graph architectures to deliver
              unparalleled data intelligence and real-time data movement
              tracking.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="text-accent-teal mt-1 flex-shrink-0">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Semantic Vector Search
                  </h4>
                  <p className="text-secondary-text">
                    Find conceptually similar information across your entire
                    data ecosystem with advanced embedding models.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-accent-teal mt-1 flex-shrink-0">
                  <Layers3 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Multi-Layered Knowledge Graphs
                  </h4>
                  <p className="text-secondary-text">
                    Visualize complex relationships and data flows between
                    entities with dynamic, interactive graph structures.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-accent-teal mt-1 flex-shrink-0">
                  <Package className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Contextual Retrieval Engine
                  </h4>
                  <p className="text-secondary-text">
                    Intelligently retrieve and transfer the most relevant
                    information based on query context and user intent.
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-gradient-primary text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              Explore Our Technology
            </Button>
          </div>

          <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl border border-accent-purple/30">
            <div ref={containerRef} className="absolute inset-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
