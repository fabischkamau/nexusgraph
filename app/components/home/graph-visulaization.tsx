"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export default function GraphVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.enableZoom = true;
    controls.zoomSpeed = 0.7;

    // Create nodes and links
    const nodes: any = [];
    const links: any = [];
    const dataPackets: any = [];
    const nodeCount = 100;
    const nodeGeometry = new THREE.SphereGeometry(0.25, 16, 16);

    // Create node materials with different colors - added orange color
    const nodeMaterials = [
      new THREE.MeshBasicMaterial({ color: 0x7b42f6 }), // purple
      new THREE.MeshBasicMaterial({ color: 0x00e5ff }), // cyan
      new THREE.MeshBasicMaterial({ color: 0x5a5aff }), // blue
      new THREE.MeshBasicMaterial({ color: 0xff7f00 }), // orange
    ];

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(
        nodeGeometry,
        nodeMaterials[Math.floor(Math.random() * nodeMaterials.length)]
      );

      // Position nodes in a sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 15 + Math.random() * 10;

      node.position.x = radius * Math.sin(phi) * Math.cos(theta);
      node.position.y = radius * Math.sin(phi) * Math.sin(theta);
      node.position.z = radius * Math.cos(phi);

      // Add a random pulse effect to nodes
      node.userData = {
        pulseSpeed: 0.003 + Math.random() * 0.005,
        pulseScale: 1.0,
        pulseDirection: 1,
        originalScale: 1.0,
        nodeType: Math.floor(Math.random() * 4), // 0-3 for different node types
      };

      scene.add(node);
      nodes.push(node);
    }

    // Create links between nodes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x3a3a5a,
      transparent: true,
      opacity: 0.3,
    });

    // Connect nodes with links
    const connections: any[] = [];
    for (let i = 0; i < nodeCount; i++) {
      // Connect to 2-4 random nodes
      const connectionCount = 2 + Math.floor(Math.random() * 3);

      for (let j = 0; j < connectionCount; j++) {
        const targetIndex = Math.floor(Math.random() * nodeCount);

        if (
          targetIndex !== i &&
          !connections.find(
            (c) =>
              (c.source === i && c.target === targetIndex) ||
              (c.source === targetIndex && c.target === i)
          )
        ) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            nodes[i].position,
            nodes[targetIndex].position,
          ]);

          const line = new THREE.Line(geometry, lineMaterial);
          scene.add(line);

          const connection = {
            line: line,
            source: i,
            target: targetIndex,
            dataFrequency: 3 + Math.floor(Math.random() * 8), // How often data packets are created
            lastPacketTime: 0,
          };

          links.push(connection);
          connections.push({ source: i, target: targetIndex });
        }
      }
    }

    // Create data packet geometry
    const packetGeometry = new THREE.SphereGeometry(0.1, 8, 8);

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

    // Animation loop
    let frameCount = 0;
    function animate() {
      frameCount++;
      requestAnimationFrame(animate);

      // Update controls
      controls.update();

      // Rotate the entire graph slowly
      scene.rotation.y += 0.0005;

      // Pulse effect for nodes
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

      // Update link positions
      links.forEach((link: any) => {
        link.line.geometry.setFromPoints([
          nodes[link.source].position,
          nodes[link.target].position,
        ]);
        link.line.geometry.attributes.position.needsUpdate = true;

        // Create new data packets periodically
        if (frameCount % 60 === 0 && Math.random() < 0.2) {
          if (frameCount - link.lastPacketTime > link.dataFrequency * 60) {
            const packet = new THREE.Mesh(
              packetGeometry,
              packetMaterials[
                Math.floor(Math.random() * packetMaterials.length)
              ]
            );

            // Start at source position
            packet.position.copy(nodes[link.source].position);

            // Store packet metadata
            packet.userData = {
              source: link.source,
              target: link.target,
              progress: 0,
              speed: 0.01 + Math.random() * 0.02,
            };

            scene.add(packet);
            dataPackets.push(packet);
            link.lastPacketTime = frameCount;
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
          const sourcePos = nodes[packet.userData.source].position;
          const targetPos = nodes[packet.userData.target].position;

          packet.position.x =
            sourcePos.x +
            (targetPos.x - sourcePos.x) * packet.userData.progress;
          packet.position.y =
            sourcePos.y +
            (targetPos.y - sourcePos.y) * packet.userData.progress;
          packet.position.z =
            sourcePos.z +
            (targetPos.z - sourcePos.z) * packet.userData.progress;

          // Scale packet to create pulse effect
          const scale =
            1 + 0.3 * Math.sin(packet.userData.progress * Math.PI * 2);
          packet.scale.set(scale, scale, scale);
        }
      }

      renderer.render(scene, camera);
    }

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }

      // Dispose resources
      nodes.forEach((node: any) => {
        node.geometry.dispose();
        node.material.dispose();
      });

      links.forEach((link: any) => {
        link.line.geometry.dispose();
        link.line.material.dispose();
      });

      dataPackets.forEach((packet: any) => {
        packet.geometry.dispose();
        packet.material.dispose();
      });
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" />;
}
