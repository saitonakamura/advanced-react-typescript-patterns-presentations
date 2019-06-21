import React from "react";

type DataTableProps<T> = {
  data: T[];
  columns: Array<Column<T>>;
};

type Column<T> = {
  header: string;
  key: keyof T;
};

class DataTable<T> extends React.Component<DataTableProps<T>, {}> {
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

function DataTableF<T>({ data, columns }: DataTableProps<T>) {
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
    <DataTable<Warrior>
      data={[{ name: "Фа Пинг", bornAt: new Date(1998, 6, 19) }]}
      columns={[
        { header: "Name", key: "name" },
        { header: "Born at", key: "bornAt" }
      ]}
    />
    <DataTableF<Warrior>
      data={[{ name: "Ли шанг", bornAt: new Date(1998, 6, 19) }]}
      columns={[
        { header: "Name", key: "name" },
        { header: "Born at", key: "bornAt" }
      ]}
    />
  </>
);