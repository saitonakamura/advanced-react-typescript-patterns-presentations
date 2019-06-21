import React from "react";

type DataTableProps = {
  data: Array<{}>;
  columns: Array<Column>;
};

type Column = {
  header: string;
  key: string;
};

class DataTable extends React.Component<DataTableProps> {
  render() {
    const { data, columns } = this.props;

    return (
      <table>
        {data.map(item => (
          <tr>
            {columns.map(column => (
              <td>{item[column.key]}</td>
            ))}
          </tr>
        ))}
      </table>
    );
  }
}

function DataTableF({ data, columns }: DataTableProps) {
  return (
    <table>
      {data.map(item => (
        <tr>
          {columns.map(column => (
            <td>{item[column.key]}</td>
          ))}
        </tr>
      ))}
    </table>
  );
}

type Warrior = { name: string; bornAt: Date };

export const App = ({}) => (
  <>
    <DataTable
      data={[{ name: "Фа Пинг", bornAt: new Date(1998, 6, 19) }]}
      columns={[
        { header: "Name", key: "name" },
        { header: "Born at", key: "createdAt" }
      ]}
    />
    <DataTableF
      data={[{ name: "Ли шанг", bornAt: new Date(1998, 6, 19) }]}
      columns={[
        { header: "Name", key: "name" },
        { header: "Born at", key: "createdAt" }
      ]}
    />
  </>
);
