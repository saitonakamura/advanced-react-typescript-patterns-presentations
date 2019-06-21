type Data = {
  value: number;
}

const readOnly = { value: 1 } as const;

readOnly.value = 0

function erase(data: Data): void {
  delete data.value;
}

erase(readOnly); // expected a type error, actual: no problem