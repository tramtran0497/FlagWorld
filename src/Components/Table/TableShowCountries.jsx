import TableHead from "./TableHead"
import TableBody from "./TableBody"

function TableShowsCountries({listItems, loading, error}) {
  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Something went wrong...</h1>

  return (
    <table>
      <TableHead/>
      <TableBody listItems={listItems}/>
    </table>
  )
}

export default TableShowsCountries