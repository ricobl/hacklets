import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowBigUp,
  Command,
  CornerDownLeft,
  ChevronUp,
  CircleArrowOutUpLeft,
  Delete,
  Option,
  Space,
  type LucideProps,
} from 'lucide-react'
import type { ComponentType } from 'react'

const KEY_ICONS: Record<string, ComponentType<LucideProps>> = {
  cmd: Command,
  command: Command,
  meta: Command,
  option: Option,
  alt: Option,
  ctrl: ChevronUp,
  control: ChevronUp,
  shift: ArrowBigUp,
  del: Delete,
  delete: Delete,
  backspace: Delete,
  space: Space,
  enter: CornerDownLeft,
  return: CornerDownLeft,
  up: ArrowUp,
  down: ArrowDown,
  left: ArrowLeft,
  right: ArrowRight,
  esc: CircleArrowOutUpLeft,
  escape: CircleArrowOutUpLeft,
}

function Key({ label }: { label: string }) {
  const Icon = KEY_ICONS[label.toLowerCase()]
  return (
    <kbd className="inline-flex h-6 items-center gap-1 rounded border border-border bg-panel-2 px-1.5 font-mono text-[13px] text-ink shadow-[0_2px_0_#00000066]">
      {Icon && <Icon className="size-3.5" />}
      {label}
    </kbd>
  )
}

export default function Shortcut({
  combo,
  className,
}: {
  combo: string
  className?: string
}) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className ?? ''}`}>
      {combo
        .split('+')
        .map((k) => k.trim())
        .filter(Boolean)
        .map((label, i) => (
          <span key={label} className="inline-flex items-center gap-1.5">
            {i > 0 && <span className="text-muted">+</span>}
            <Key label={label} />
          </span>
        ))}
    </span>
  )
}
