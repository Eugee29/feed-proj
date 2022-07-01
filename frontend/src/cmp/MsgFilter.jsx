export const MsgFilter = ({ filterBy, setFilterBy }) => {
    const handleChange = (ev) => {
        setFilterBy({ ...filterBy, [ev.target.name]: ev.target.value })
    }

    return (
        <section className="msg-filter main-layout">
            <input
                className="filter-input "
                name="keyword"
                type="text"
                placeholder="Filter"
                autoComplete="off"
                value={filterBy.keyword}
                onChange={handleChange}
            />
        </section>
    )
}
