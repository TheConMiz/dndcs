export default ClassCell = (classDetails) => (
    <Pane
        width="100%"
        display="flex"
        justifyContent="space-evenly"
        alignItems="space-between"
        padding={12}

        background="tint2"
    >
        <SelectMenu
            title="Class(es)"

            options={this.state.classList.map(label => ({
                label: label.className, value: label
            }))}

            emptyView={(
                <Pane
                    height="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    background="tint2"
                >
                    <Text
                        size={300}
                    >
                        No Results
                            </Text>
                </Pane>
            )}

            closeOnSelect={true}
        >
            <Button
                style={{ width: '120px' }}
            >
                Select a Class...
                        </Button>
        </SelectMenu>
        <SelectMenu
            title="Sub-Class(es)"

            emptyView={(
                <Pane
                    height="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    background="tint2"
                >
                    <Text
                        size={300}
                    >
                        No Results
                            </Text>
                </Pane>
            )}
        >
            <Button
                style={{ width: '150px' }}
            >
                Select a Sub-Class...
                        </Button>
        </SelectMenu>
        <NumericInput
            allowNumericCharactersOnly={true}
            max={20}
            min={0}
            intent="primary"
            style={{ width: '70px' }}
            placeholder="Level..."
        />
        <IconButton
            icon="trash"
            intent="danger"
        />
    </Pane>
)