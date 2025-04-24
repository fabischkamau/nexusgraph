"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Play, Pause, RotateCcw } from "lucide-react";

export default function TechnologyDemo() {
  const [activeTab, setActiveTab] = useState("knowledge-graph");
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Reset animation when tab changes
  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  }, [activeTab]);

  // Knowledge Graph Animation
  useEffect(() => {
    if (activeTab !== "knowledge-graph" || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    // Node class
    class Node {
      x: number;
      y: number;
      radius: number;
      color: string;
      label: string;
      connections: Node[];
      targetX: number;
      targetY: number;
      velX: number;
      velY: number;

      constructor(
        x: number,
        y: number,
        radius: number,
        color: string,
        label: string
      ) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.label = label;
        this.connections = [];
        this.targetX = x;
        this.targetY = y;
        this.velX = 0;
        this.velY = 0;
      }

      draw() {
        if (!ctx) return;

        // Draw node
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Draw label
        ctx.font = "12px Arial";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.label, this.x, this.y);
      }

      update() {
        // Simple physics for smooth movement
        this.velX = (this.targetX - this.x) * 0.05;
        this.velY = (this.targetY - this.y) * 0.05;

        this.x += this.velX;
        this.y += this.velY;
      }

      connect() {
        if (!ctx) return;
        this.connections.forEach((node) => {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(node.x, node.y);
          ctx.strokeStyle = "rgba(123, 66, 246, 0.3)";
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      }
    }

    // Create nodes
    const nodes: Node[] = [
      new Node(canvas.width / 2, canvas.height / 2, 30, "#7B42F6", "Person"),
      new Node(
        canvas.width / 2 - 150,
        canvas.height / 2 - 100,
        25,
        "#00E5FF",
        "Company"
      ),
      new Node(
        canvas.width / 2 + 150,
        canvas.height / 2 - 100,
        25,
        "#00E5FF",
        "Project"
      ),
      new Node(
        canvas.width / 2 - 100,
        canvas.height / 2 + 120,
        20,
        "#5A5AFF",
        "Skill"
      ),
      new Node(
        canvas.width / 2 + 100,
        canvas.height / 2 + 120,
        20,
        "#5A5AFF",
        "Location"
      ),
    ];

    // Connect nodes
    nodes[0].connections = [nodes[1], nodes[2], nodes[3], nodes[4]];
    nodes[1].connections = [nodes[0], nodes[2]];
    nodes[2].connections = [nodes[0], nodes[1], nodes[4]];
    nodes[3].connections = [nodes[0]];
    nodes[4].connections = [nodes[0], nodes[2]];

    // Animation steps for demonstration
    const animationSteps = [
      // Initial positions
      () => {},
      // Highlight Person -> Company relationship
      () => {
        ctx.beginPath();
        ctx.moveTo(nodes[0].x, nodes[0].y);
        ctx.lineTo(nodes[1].x, nodes[1].y);
        ctx.strokeStyle = "rgba(123, 66, 246, 0.8)";
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.font = "14px Arial";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText(
          "WORKS_AT",
          (nodes[0].x + nodes[1].x) / 2,
          (nodes[0].y + nodes[1].y) / 2 - 10
        );
      },
      // Highlight Person -> Project relationship
      () => {
        ctx.beginPath();
        ctx.moveTo(nodes[0].x, nodes[0].y);
        ctx.lineTo(nodes[2].x, nodes[2].y);
        ctx.strokeStyle = "rgba(0, 229, 255, 0.8)";
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.font = "14px Arial";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText(
          "WORKS_ON",
          (nodes[0].x + nodes[2].x) / 2,
          (nodes[0].y + nodes[2].y) / 2 - 10
        );
      },
      // Highlight Person -> Skill relationship
      () => {
        ctx.beginPath();
        ctx.moveTo(nodes[0].x, nodes[0].y);
        ctx.lineTo(nodes[3].x, nodes[3].y);
        ctx.strokeStyle = "rgba(90, 90, 255, 0.8)";
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.font = "14px Arial";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText(
          "HAS_SKILL",
          (nodes[0].x + nodes[3].x) / 2,
          (nodes[0].y + nodes[3].y) / 2 + 10
        );
      },
      // Highlight complex path: Person -> Project -> Location
      () => {
        ctx.beginPath();
        ctx.moveTo(nodes[0].x, nodes[0].y);
        ctx.lineTo(nodes[2].x, nodes[2].y);
        ctx.lineTo(nodes[4].x, nodes[4].y);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.font = "14px Arial";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText(
          "Complex Path: Person -> Project -> Location",
          canvas.width / 2,
          30
        );
      },
    ];

    let currentStep = 0;
    let lastStepTime = 0;
    const stepDuration = 2000; // 2 seconds per step

    const animate = (timestamp: number) => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      nodes.forEach((node) => node.connect());

      // Draw nodes
      nodes.forEach((node) => {
        node.update();
        node.draw();
      });

      // Handle animation steps if playing
      if (isPlaying) {
        if (!lastStepTime) lastStepTime = timestamp;
        const elapsed = timestamp - lastStepTime;

        // Update progress
        setProgress((currentStep / (animationSteps.length - 1)) * 100);

        // Move to next step after duration
        if (elapsed > stepDuration) {
          currentStep = (currentStep + 1) % animationSteps.length;
          lastStepTime = timestamp;
        }

        // Execute current animation step
        animationSteps[currentStep]();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [activeTab, isPlaying]);

  // RAG System Animation
  useEffect(() => {
    if (activeTab !== "rag-system" || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    // Document class
    class Document {
      x: number;
      y: number;
      width: number;
      height: number;
      color: string;
      label: string;
      targetX: number;
      targetY: number;
      velX: number;
      velY: number;
      selected: boolean;

      constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        color: string,
        label: string
      ) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.label = label;
        this.targetX = x;
        this.targetY = y;
        this.velX = 0;
        this.velY = 0;
        this.selected = false;
      }

      draw() {
        if (!ctx) return;

        // Draw document
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        // Draw label
        ctx.font = "12px Arial";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(
          this.label,
          this.x + this.width / 2,
          this.y + this.height / 2
        );

        // Draw selection indicator
        if (this.selected) {
          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = 2;
          ctx.strokeRect(
            this.x - 3,
            this.y - 3,
            this.width + 6,
            this.height + 6
          );
        }
      }

      update() {
        // Simple physics for smooth movement
        this.velX = (this.targetX - this.x) * 0.1;
        this.velY = (this.targetY - this.y) * 0.1;

        this.x += this.velX;
        this.y += this.velY;
      }
    }

    // Create documents
    const documents: Document[] = [];
    const docCount = 12;
    const docWidth = 80;
    const docHeight = 40;
    const startX = (canvas.width - docCount * (docWidth + 10)) / 2;
    const startY = 50;

    for (let i = 0; i < docCount; i++) {
      const x = startX + i * (docWidth + 10);
      const y = startY;
      const color =
        i % 3 === 0 ? "#7B42F6" : i % 3 === 1 ? "#00E5FF" : "#5A5AFF";
      documents.push(
        new Document(x, y, docWidth, docHeight, color, `Doc ${i + 1}`)
      );
    }

    // Query box
    const queryBox = {
      x: canvas.width / 2 - 150,
      y: canvas.height - 100,
      width: 300,
      height: 50,
      draw: () => {
        if (!ctx) return;
        ctx.fillStyle = "#7B42F6";
        ctx.fillRect(queryBox.x, queryBox.y, queryBox.width, queryBox.height);
        ctx.font = "16px Arial";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(
          "User Query",
          queryBox.x + queryBox.width / 2,
          queryBox.y + queryBox.height / 2
        );
      },
    };

    // Animation steps for demonstration
    const animationSteps = [
      // Initial state
      () => {},
      // Highlight documents for retrieval
      () => {
        documents[1].selected = true;
        documents[4].selected = true;
        documents[7].selected = true;
        documents[10].selected = true;

        // Draw retrieval lines
        if (ctx) {
          ctx.beginPath();
          ctx.moveTo(queryBox.x + queryBox.width / 2, queryBox.y);
          ctx.lineTo(documents[1].x + docWidth / 2, documents[1].y + docHeight);
          ctx.strokeStyle = "rgba(123, 66, 246, 0.5)";
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(queryBox.x + queryBox.width / 2, queryBox.y);
          ctx.lineTo(documents[4].x + docWidth / 2, documents[4].y + docHeight);
          ctx.strokeStyle = "rgba(123, 66, 246, 0.5)";
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(queryBox.x + queryBox.width / 2, queryBox.y);
          ctx.lineTo(documents[7].x + docWidth / 2, documents[7].y + docHeight);
          ctx.strokeStyle = "rgba(123, 66, 246, 0.5)";
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(queryBox.x + queryBox.width / 2, queryBox.y);
          ctx.lineTo(
            documents[10].x + docWidth / 2,
            documents[10].y + docHeight
          );
          ctx.strokeStyle = "rgba(123, 66, 246, 0.5)";
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      },
      // Move selected documents to context area
      () => {
        documents[1].targetY = canvas.height / 2 - 30;
        documents[4].targetY = canvas.height / 2 - 30;
        documents[7].targetY = canvas.height / 2 - 30;
        documents[10].targetY = canvas.height / 2 - 30;

        documents[1].targetX = canvas.width / 2 - 180;
        documents[4].targetX = canvas.width / 2 - 60;
        documents[7].targetX = canvas.width / 2 + 60;
        documents[10].targetX = canvas.width / 2 + 180;

        // Draw context area
        if (ctx) {
          ctx.fillStyle = "rgba(123, 66, 246, 0.1)";
          ctx.fillRect(canvas.width / 2 - 200, canvas.height / 2 - 50, 400, 80);
          ctx.strokeStyle = "rgba(123, 66, 246, 0.5)";
          ctx.strokeRect(
            canvas.width / 2 - 200,
            canvas.height / 2 - 50,
            400,
            80
          );
          ctx.font = "14px Arial";
          ctx.fillStyle = "#ffffff";
          ctx.textAlign = "center";
          ctx.fillText(
            "Retrieved Context",
            canvas.width / 2,
            canvas.height / 2 - 60
          );
        }
      },
      // Show LLM processing
      () => {
        // Draw LLM box
        if (ctx) {
          ctx.fillStyle = "#00E5FF";
          ctx.fillRect(canvas.width / 2 - 100, canvas.height / 2 + 60, 200, 60);
          ctx.font = "16px Arial";
          ctx.fillStyle = "#ffffff";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(
            "LLM Processing",
            canvas.width / 2,
            canvas.height / 2 + 90
          );

          // Draw arrows from context to LLM
          ctx.beginPath();
          ctx.moveTo(canvas.width / 2, canvas.height / 2 + 30);
          ctx.lineTo(canvas.width / 2, canvas.height / 2 + 60);
          ctx.strokeStyle = "rgba(0, 229, 255, 0.8)";
          ctx.lineWidth = 2;
          ctx.stroke();

          // Draw arrow from query to LLM
          ctx.beginPath();
          ctx.moveTo(queryBox.x + queryBox.width / 2, queryBox.y);
          ctx.lineTo(canvas.width / 2, canvas.height / 2 + 90);
          ctx.strokeStyle = "rgba(0, 229, 255, 0.8)";
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      },
      // Show response generation
      () => {
        // Draw response box
        if (ctx) {
          ctx.fillStyle = "#5A5AFF";
          ctx.fillRect(
            canvas.width / 2 - 150,
            canvas.height / 2 + 150,
            300,
            60
          );
          ctx.font = "16px Arial";
          ctx.fillStyle = "#ffffff";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(
            "Generated Response",
            canvas.width / 2,
            canvas.height / 2 + 180
          );

          // Draw arrow from LLM to response
          ctx.beginPath();
          ctx.moveTo(canvas.width / 2, canvas.height / 2 + 120);
          ctx.lineTo(canvas.width / 2, canvas.height / 2 + 150);
          ctx.strokeStyle = "rgba(90, 90, 255, 0.8)";
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      },
    ];

    let currentStep = 0;
    let lastStepTime = 0;
    const stepDuration = 2000; // 2 seconds per step

    const animate = (timestamp: number) => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw documents
      documents.forEach((doc) => {
        doc.update();
        doc.draw();
      });

      // Draw query box
      queryBox.draw();

      // Handle animation steps if playing
      if (isPlaying) {
        if (!lastStepTime) lastStepTime = timestamp;
        const elapsed = timestamp - lastStepTime;

        // Update progress
        setProgress((currentStep / (animationSteps.length - 1)) * 100);

        // Move to next step after duration
        if (elapsed > stepDuration) {
          currentStep = (currentStep + 1) % animationSteps.length;
          lastStepTime = timestamp;
        }

        // Execute current animation step
        animationSteps[currentStep]();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [activeTab, isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    // Force re-render of the canvas
    setActiveTab((prev) => prev);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient-purple opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Interactive Technology Demo
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            Explore how our technology works through these interactive
            visualizations.
          </p>
        </div>

        <Tabs
          defaultValue="knowledge-graph"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="knowledge-graph" className="text-lg py-3">
              Knowledge Graph
            </TabsTrigger>
            <TabsTrigger value="rag-system" className="text-lg py-3">
              RAG System
            </TabsTrigger>
          </TabsList>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-4 md:p-8 mb-8"
          >
            <div className="h-[400px] relative">
              <canvas ref={canvasRef} className="w-full h-full" />
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className={`rounded-full bg-transparent hover:text-accent-teal ${
                  isPlaying
                    ? "bg-accent-purple text-white hover:bg-accent-purple/90"
                    : "border-accent-purple/20 hover:border-accent-purple/50 hover:bg-accent-purple/10"
                }`}
                onClick={handlePlayPause}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent hover:text-accent-teal border-accent-purple/20 hover:border-accent-purple/50 hover:bg-accent-purple/10"
                onClick={handleReset}
              >
                <RotateCcw className="w-5 h-5" />
              </Button>
            </div>

            <div className="w-full sm:w-2/3 bg-primary-bg/50 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-accent-purple to-accent-teal h-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-secondary-text">
              {activeTab === "knowledge-graph"
                ? "This visualization demonstrates how knowledge graphs connect entities through relationships, enabling complex queries and insights discovery. You can see how different entities like Person, Company, Project, Skill, and Location are interconnected, allowing for powerful path-based queries and relationship analysis."
                : "This visualization shows how RAG systems retrieve relevant documents based on a query, combine them with the query as context for an LLM, and generate accurate, grounded responses. The process ensures AI outputs are factual and relevant to your specific data."}
            </p>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
