export const search = (datas, query) => {
    return datas.filter((data) => data.firstName.toLowerCase().includes(query)
        || data.lastName.toLowerCase().includes(query)
        || data.startDate.toLowerCase().includes(query)
        || data.department.toLowerCase().includes(query)
        || data.birthDate.toLowerCase().includes(query)
        || data.street.toLowerCase().includes(query)
        || data.city.toLowerCase().includes(query)
        || data.state.toLowerCase().includes(query)
        || data.postalZip.toLowerCase().includes(query))
}