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

type User = { name: string; createdAt: Date };

export const App = ({}) => (
  <>
    <DataTable<User>
      data={[{ name: "Saito Nakamura", createdAt: new Date() }]}
      columns={[
        { header: "Name", key: "name" },
        { header: "Created at", key: "createdAt" }
      ]}
    />
    <DataTableF<User>
      data={[{ name: "Saito Nakamura", createdAt: new Date() }]}
      columns={[
        { header: "Name", key: "name" },
        { header: "Created at", key: "createdAt" }
      ]}
    />
  </>
);
