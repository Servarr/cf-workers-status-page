import MonitorCard from './monitorCard'

export default function MonitorGroup({ group, visible, kvMonitors }) {
    return (
        <div className="d-flex p-2">
            <h2 className="flex text-lg ml-4 mb-2 mt-4" style={{ "textTransform": "capitalize" }}>{group}</h2>
            {visible.filter((m, _) => m.group === group).map((monitor, key) => {
                return (
                    <MonitorCard
                        key={key}
                        monitor={monitor}
                        data={kvMonitors[monitor.id]}
                    />
                )
            })}
        </div>
    )
}