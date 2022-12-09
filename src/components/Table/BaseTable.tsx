import "./BaseTable.css";
type IBaseTableProps = {
  data: {
    headings: string[];
    rows: string[][];
  };
};
export function BaseTable({ data: { headings, rows } }: IBaseTableProps) {
  return (
    <table id="basetable">
      <tr>
        {headings.map((headings, i) => (
          <th key={`basetable-heading-${i}`}>{headings}</th>
        ))}
      </tr>
      {rows.map((row, j) => (
        <tr key={`basetable-row-${j}`}>
          {row.map((data, k) => (
            <td key={`basetable-data-r${j}-${k}`}>{data}</td>
          ))}
        </tr>
      ))}
    </table>
  );
}
