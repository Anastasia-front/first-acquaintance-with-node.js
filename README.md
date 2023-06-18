# Запуск проекту

npm install // npm i

## Скриншоти за посиланням

https://drive.google.com/drive/folders/1vxwNf_qo1MMYqcZk1pPFlbw_KZuDaxUO

### Дії, які підтримує додаток

<br/>

Нижче описані команди👇🏻

#### Отримати в терміналі весь список контактів:

node index.js --action="list" // node index --action list

#### Отримати контакт по id - будe виведено в термінал обʼєкт або null, якщо контакту з таким id не існує:

node index.js --action="get" --id your-id // node index --action get --id your-id

#### Додати контакт - будe виведено в термінал обʼєкт:

node index.js --action="add" --name your-name --email your-email --phone your-phone // node index --action add --name your-name --email your-email --phone your-phone

#### Видалити контакт - будe виведено в термінал обʼєкт видаленого контакту або null, якщо контакту з таким id не існує:

node index.js --action="remove" --id your-id // node index --action remove your-id
