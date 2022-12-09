import {defineComponent} from 'vue'

export default defineComponent({
    props: {
        data: {
            type: Array,
            default: []
        }
    },
    setup(props, context) {
        let children
        if (Array.isArray(context.slots.default()[0].children)) {
            children = context.slots.default()[0].children
        } else {
            children = context.slots.default()
        }

        const columns = children.map((child, key) => {
            const {prop, label} = child.props
            return {
                key,
                prop,
                label
            }
        })

        return () => (
            <>
                <table>
                    <thead>
                        <tr>
                            {columns.map((item) => {
                                return (
                                    <th scope="col">{item.label}</th>
                                )
                            })}
                        </tr>
                    </thead>

                    <tbody>
                    {
                        props.data.map((dt, index) => {
                                // index好比就是tr行号
                                return (
                                    <tr>
                                        {
                                            columns.map((item, key) => {
                                                return (
                                                    <td>
                                                        {dt[item.prop] ?? context.slots.default({
                                                            index: index
                                                        })}
                                                    </td>
                                                );
                                            })
                                        }
                                    </tr>
                                );
                            }
                        )
                    }
                    </tbody>
                </table>
            </>)
    }
})
