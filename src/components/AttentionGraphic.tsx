"use client";
import { motion } from "framer-motion";

export function AttentionGraphic() {
  const S = 24; // Box size
  const G = 4; // Gap
  const gridW = 3 * S + 2 * G;

  // Base Coordinates
  const qx = 150, qy = 400;
  const ex = 150, ey = 290;
  const kx = 100, ky = 290;
  const xx = 50, xy = 290;

  const softY = 245;
  const softH = 24;

  const ax = 150, ay = 140;
  const vx = 100, vy = 140;

  const mulY = 95;
  const mulH = 24;

  const yx = 150, yy = 45;

  // React component for a grid of colored blocks
  const BlockGrid = ({ x, y, rows, cols, color, labelFn, textColor = "#18181b" }: any) => {
    return (
      <g>
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((_, c) => {
            const bx = x + c * (S + G);
            const by = y + r * (S + G);
            return (
              <g key={`${r}-${c}`}>
                <rect x={bx} y={by} width={S} height={S} fill={color} stroke="#3f3f46" strokeWidth={1} rx={2} />
                <text x={bx + S / 2} y={by + S / 2 + 3} fontSize="10" fill={textColor} textAnchor="middle" fontFamily="monospace">
                  {labelFn(r, c)}
                </text>
              </g>
            );
          })
        )}
      </g>
    );
  };

  // Helper for animated connecting lines
  const FlowLine = ({ d }: { d: string }) => (
    <g>
      {/* Base line */}
      <path d={d} stroke="#71717a" strokeWidth={1.5} fill="none" markerEnd="url(#arrow)" opacity={0.5} />
      {/* Animated flow */}
      <motion.path
        d={d} stroke="#a78bfa" strokeWidth={2} fill="none"
        strokeDasharray="4 8"
        animate={{ strokeDashoffset: [12, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
      />
    </g>
  );

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center font-mono text-xs pointer-events-none md:scale-110 xl:scale-125 -ml-4">
      {/* Background ambient glow */}
      <div className="absolute w-[200px] h-[350px] bg-primary/10 rounded-full blur-[80px]" />

      <svg className="absolute w-full h-full max-w-[350px]" viewBox="0 0 350 450">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#71717a" opacity="0.8" />
          </marker>
        </defs>

        {/* ---- CONNECTIONS ---- */}
        {/* Q -> E */}
        <FlowLine d={`M ${qx + S / 2} ${qy - 2} L ${ex + S / 2} ${ey + gridW + 2}`} />
        <FlowLine d={`M ${qx + S + G + S / 2} ${qy - 2} L ${ex + S + G + S / 2} ${ey + gridW + 2}`} />
        <FlowLine d={`M ${qx + 2 * (S + G) + S / 2} ${qy - 2} L ${ex + 2 * (S + G) + S / 2} ${ey + gridW + 2}`} />

        {/* X -> K */}
        <FlowLine d={`M ${xx + S + 2} ${xy + S / 2} L ${kx - 2} ${ky + S / 2}`} />
        <FlowLine d={`M ${xx + S + 2} ${xy + S + G + S / 2} L ${kx - 2} ${ky + S + G + S / 2}`} />
        <FlowLine d={`M ${xx + S + 2} ${xy + 2 * (S + G) + S / 2} L ${kx - 2} ${ky + 2 * (S + G) + S / 2}`} />

        {/* K -> E */}
        <FlowLine d={`M ${kx + S + 2} ${ky + S / 2} L ${ex - 2} ${ey + S / 2}`} />
        <FlowLine d={`M ${kx + S + 2} ${ky + S + G + S / 2} L ${ex - 2} ${ey + S + G + S / 2}`} />
        <FlowLine d={`M ${kx + S + 2} ${ky + 2 * (S + G) + S / 2} L ${ex - 2} ${ey + 2 * (S + G) + S / 2}`} />

        {/* X -> V */}
        <path d={`M ${xx + S / 2} ${xy - 2} L ${xx + S / 2} ${vy + S / 2} L ${vx - 2} ${vy + S / 2}`} stroke="#71717a" strokeWidth={1.5} fill="none" opacity={0.5} markerEnd="url(#arrow)" />
        <path d={`M ${xx + S / 2} ${xy - 2} L ${xx + S / 2} ${vy + S + G + S / 2} L ${vx - 2} ${vy + S + G + S / 2}`} stroke="#71717a" strokeWidth={1.5} fill="none" opacity={0.5} markerEnd="url(#arrow)" />
        <path d={`M ${xx + S / 2} ${xy - 2} L ${xx + S / 2} ${vy + 2 * (S + G) + S / 2} L ${vx - 2} ${vy + 2 * (S + G) + S / 2}`} stroke="#71717a" strokeWidth={1.5} fill="none" opacity={0.5} markerEnd="url(#arrow)" />

        {/* V -> A */}
        <FlowLine d={`M ${vx + S + 2} ${vy + S / 2} L ${ax - 2} ${ay + S / 2}`} />
        <FlowLine d={`M ${vx + S + 2} ${vy + S + G + S / 2} L ${ax - 2} ${ay + S + G + S / 2}`} />
        <FlowLine d={`M ${vx + S + 2} ${vy + 2 * (S + G) + S / 2} L ${ax - 2} ${ay + 2 * (S + G) + S / 2}`} />

        {/* E -> Softmax */}
        <FlowLine d={`M ${ex + S / 2} ${ey - 2} L ${ex + S / 2} ${softY + softH + 2}`} />
        <FlowLine d={`M ${ex + S + G + S / 2} ${ey - 2} L ${ex + S + G + S / 2} ${softY + softH + 2}`} />
        <FlowLine d={`M ${ex + 2 * (S + G) + S / 2} ${ey - 2} L ${ex + 2 * (S + G) + S / 2} ${softY + softH + 2}`} />

        {/* Softmax -> A */}
        <FlowLine d={`M ${ax + S / 2} ${softY - 2} L ${ax + S / 2} ${ay + gridW + 2}`} />
        <FlowLine d={`M ${ax + S + G + S / 2} ${softY - 2} L ${ax + S + G + S / 2} ${ay + gridW + 2}`} />
        <FlowLine d={`M ${ax + 2 * (S + G) + S / 2} ${softY - 2} L ${ax + 2 * (S + G) + S / 2} ${ay + gridW + 2}`} />

        {/* A -> Mul+Add */}
        <FlowLine d={`M ${ax + S / 2} ${ay - 2} L ${ax + S / 2} ${mulY + softH + 2}`} />
        <FlowLine d={`M ${ax + S + G + S / 2} ${ay - 2} L ${ax + S + G + S / 2} ${mulY + softH + 2}`} />
        <FlowLine d={`M ${ax + 2 * (S + G) + S / 2} ${ay - 2} L ${ax + 2 * (S + G) + S / 2} ${mulY + softH + 2}`} />

        {/* Mul+Add -> Y */}
        <FlowLine d={`M ${yx + S / 2} ${mulY - 2} L ${yx + S / 2} ${yy + S + 2}`} />
        <FlowLine d={`M ${yx + S + G + S / 2} ${mulY - 2} L ${yx + S + G + S / 2} ${yy + S + 2}`} />
        <FlowLine d={`M ${yx + 2 * (S + G) + S / 2} ${mulY - 2} L ${yx + 2 * (S + G) + S / 2} ${yy + S + 2}`} />


        {/* ---- RENDER BLOCKS ---- */}

        {/* Q (1x3) Green */}
        <BlockGrid x={qx} y={qy} rows={1} cols={3} color="#86efac" labelFn={(r: any, c: any) => `q${c}`} />

        {/* E Alignment (3x3) Gray */}
        <BlockGrid x={ex} y={ey} rows={3} cols={3} color="#d4d4d8" labelFn={(r: any, c: any) => `e${r}${c}`} />

        {/* K (3x1) Blue */}
        <BlockGrid x={kx} y={ky} rows={3} cols={1} color="#93c5fd" labelFn={(r: any, c: any) => `k${r}`} />

        {/* X Bottom (3x1) Purple */}
        <BlockGrid x={xx} y={xy} rows={3} cols={1} color="#c084fc" labelFn={(r: any, c: any) => `x${r}`} />

        {/* Softmax Box */}
        <rect x={ax} y={softY} width={gridW} height={softH} fill="#fafafa" stroke="#3f3f46" strokeWidth={1} rx={2} />
        <text x={ax + gridW / 2} y={softY + 16} fontSize="12" fill="#18181b" textAnchor="middle">softmax(↑)</text>
        <text x={ax + gridW + 8} y={softY + 15} fontSize="10" fill="#db2777">(scaled 1/√D)</text>

        {/* A Attention (3x3) Dark Orange */}
        <BlockGrid x={ax} y={ay} rows={3} cols={3} color="#f97316" labelFn={(r: any, c: any) => `a${r}${c}`} />

        {/* V (3x1) Yellow */}
        <BlockGrid x={vx} y={vy} rows={3} cols={1} color="#fde047" labelFn={(r: any, c: any) => `v${r}`} />

        {/* Mul+Add Box */}
        <rect x={ax} y={mulY} width={gridW} height={mulH} fill="#fafafa" stroke="#3f3f46" strokeWidth={1} rx={2} />
        <text x={ax + gridW / 2} y={mulY + 15} fontSize="10" fill="#18181b" textAnchor="middle">mul(→) + add(↑)</text>

        {/* Y Output (1x3) Light Orange */}
        <BlockGrid x={yx} y={yy} rows={1} cols={3} color="#fed7aa" labelFn={(r: any, c: any) => `y${c}`} />

        {/* Left Side Labels */}
        <text x={25} y={190} transform="rotate(-90 25 190)" fontSize="12" fill="#a1a1aa" letterSpacing="1">Input vectors</text>
        <text x={100} y={115} fontSize="10" fill="#a1a1aa">v = xW_v</text>
        <text x={100} y={270} fontSize="10" fill="#a1a1aa">k = xW_k</text>

        {/* Right Side Matrices Sizes */}
        <text x={245} y={350} transform="rotate(-90 245 350)" fontSize="10" fill="#a1a1aa">Alignment</text>
        <text x={265} y={335} fontSize="10" fill="#a1a1aa">N×M</text>

        <text x={245} y={200} transform="rotate(-90 245 200)" fontSize="10" fill="#a1a1aa">Attention</text>
        <text x={265} y={185} fontSize="10" fill="#a1a1aa">N×M</text>

        <text x={245} y={415} fontSize="10" fill="#a1a1aa">D×M</text>
        <text x={245} y={60} fontSize="10" fill="#a1a1aa">D×M</text>
        <text x={105} y={375} fontSize="10" fill="#a1a1aa">N×D</text>
        <text x={105} y={225} fontSize="10" fill="#a1a1aa">N×D</text>

      </svg>
    </div>
  )
}
