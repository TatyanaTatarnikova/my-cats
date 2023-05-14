export function serializeForm(elements) {
  //формирует данные из формы в объект для отправки на сервер
  const formData = {};

  elements.forEach((input) => {
    if (input.type === "submit") return;

    if (input.type !== "checkbox") {
      formData[input.name] = input.value;
    }
    if (input.type === "checkbox") {
      formData[input.name] = input.checked;
    }
  });
  return formData;
}

export function setDataRefrash(minutes, key) {
  // функция ставит интервал обновления локал-стоража
  const setTime = new Date(new Date().getTime() + minutes * 60000);
  localStorage.setItem(key, setTime);
}
