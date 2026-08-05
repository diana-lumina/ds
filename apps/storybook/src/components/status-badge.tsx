import { getTokenStatus, STATUS_COLORS, STATUS_LABELS } from '../utils/getDesignTokens'

export function StatusBadge({ varName }: { varName: string }) {
  const { status, description } = getTokenStatus(varName)
  return (
    <span
      title={description || undefined}
      style={{
        display: 'inline-block',
        fontFamily: 'monospace',
        fontSize: 10,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        color: '#fff',
        background: STATUS_COLORS[status],
        padding: '2px 6px',
        borderRadius: 4,
        cursor: description ? 'help' : 'default',
      }}
    >
      {STATUS_LABELS[status]}
    </span>
  )
}
