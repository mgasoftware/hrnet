export const styles = {
    tableContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "1rem"
    },
    tableContainerLimitSearch: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%"
    },
    tableContainerLimit: {
        display: "flex"
    },
    tableContainerSelect: {
        marginLeft: "5px",
        marginRight: "5px"
    },
    tableContainerSearch: {
        borderRadius: "5px",
        paddingLeft: "10px"
    },
    tablePagination: {
        display:"flex",
        justifyContent: "space-between",
        marginTop: "15px"
    },
    tablePaginationText: {
        fontWeight: "600"
    },
    tablePaginationNav: {
        display: "flex"
    },
    tablePaginationList: {
        paddingLeft: "5px"
    },
    tablePaginationListNum: {
        cursor:"pointer",
        background: "rgba(151, 153, 108, 0.6)",
        borderRadius: "2px",
        padding: "5px"
    },
    activePage: {
        textDecoration: "underline",
        fontWeight: 600,
        cursor:"pointer",
        background: "rgba(151, 153, 108, 0.6)",
        borderRadius: "2px",
        padding: "5px"
    },
    disabled : {
        cursor: "text"
    },
    tableColumnFilter : {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    activeFilter: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: "600",
        textDecoration: "underline"
    }
}