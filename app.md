# Podcast Menager

### Dominio

podicasts feitos em video

### Decrição

App estilo netflix, onde posso centralizar difrentes episodios de podcasts separados por categoria

### features

- listar os episodios dos podcasts em sessões de categorias
  - [saude, fitness, mentalidade, humor]
- filtrar episodios por nome de podcasts

### como

#### Feature:

- listar os episodios dos podcasts em sessões de categorias

### como vou implementar:

GET: retorna lista de episodios

```js
[
  {
    podcastName: "flow podcast",
    episodio: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    categories: ["saúde", "bodybuilder", "esporte"],
  },
  {
    podcastName: "flow podcast",
    episodio: "Rubens Barrichello - Flow #339",
    videoId: "4KDGTdiOV4I",
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    categories: ["esporte", "corrida"],
  },
];
```

GET: retorna lista de episodios baseada no parametro enviado pelo cliente
