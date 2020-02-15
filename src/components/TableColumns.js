export const TableColumns = 
[
    {
        dataIndex: "name",
        title: "Name",
        key: "id",
        sorter: (a, b) => a.name.localeCompare(b.name),
        sortDirections: ['descend'],
        render: (content, item) => {
            return (
                <Typography.Text
                    strong={true}
                >
                    {
                        item.name
                    }
                </Typography.Text>
            )
        }
    },
    {
        dataIndex: "shortDesc",
        title: "Description",
        render: (content, item) => {
            return (
                <Popover
                    title="Full Description"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est ligula, convallis a ante at, cursus tempus sem. Nullam lacinia porta ligula, sit amet vestibulum risus interdum cursus. Mauris et porttitor lectus. Praesent varius velit nec nisi facilisis maximus. Phasellus feugiat finibus nisi nec aliquam. Donec et mattis tortor. Nunc gravida convallis quam."
                >
                    <Typography.Text>
                        {content}
                    </Typography.Text>
                </Popover>
                
            )
        }
    },
    {
        dataIndex: "range",
        title: "Range",
    },
    {
        dataIndex: "castingTime",
        title: "Time",
    },
    {
        dataIndex: "concentration",
        title: "Conc.",
        render: (content, item) => {
            return (
                <Checkbox
                    checked={item.concentration === 1 ? true : false}
                    disabled={item.concentration === 0 ? true : false}
                />
            )
        },
        filters: [
            {
                text: "Non-Concentration",
                value: 0
            },
            {
                text: "Concentration",
                value: 1
            }
        ],
        onFilter: (content, item) => item.concentration === content,

    },
    {
        dataIndex: "ritual",
        title: "Ritual",
        render: (content, item) => {
            return (
                <Checkbox
                    checked={item.ritual === 1 ? true : false}
                    disabled={item.ritual === 0 ? true : false}
                />
            )
        },
        filters: [
            {
                text: "Non-Ritual",
                value: 0
            },
            {
                text: "Ritual",
                value: 1
            }
        ],
        onFilter: (content, item) => item.ritual === content,
    },
    
    {
        dataIndex: "save",
        title: "Save",
        render: (content, item) => {
            return (
                <Typography.Text
                    type="warning"
                >
                    {
                        typeof (abilityScores.find(i => item.save === i.index)) === "undefined" ?
                            ""
                            :
                            abilityScores.find(i => item.save === i.index).abbr
                    }
                </Typography.Text>
            )
        }
    },
    {
        dataIndex: "components",
        title: "Comp.",
    },
    {
        dataIndex: "duration",
        title: "Duration",
    },
]
