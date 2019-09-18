
'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_GAP = GAP * 2;
var BAR_GAP = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;


// Высота гистограммы 150px.
// Ширина колонки 40px.
// Расстояние между колонками 50px./

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_GAP, CLOUD_Y + GAP * 3);
  ctx.fillText('Список результатов:', CLOUD_X + TEXT_GAP, CLOUD_Y + GAP * 5);
  ctx.font = '16px, PT Mono';
  ctx.textBaseline = 'hanging';

  for (var i = 0; i < names.length; i++) {
    var columnX = CLOUD_X + TEXT_GAP + (BAR_WIDTH + BAR_GAP) * i;

    ctx.fillText(names[i], columnX, BAR_HEIGHT + GAP * 9);
    ctx.fillRect(columnX, GAP * 8, BAR_WIDTH, BAR_HEIGHT);
  }
};

// После сообщения о победе должна располагаться гистограмма времён участников. Параметры гистограммы следующие:
// Высота гистограммы 150px. +
// Ширина колонки 40px. +
// Расстояние между колонками 50px./ +
// Цвет колонки игрока Вы rgba(255, 0, 0, 1).
// Цвет колонок других игроков — синий, а насыщенность задаётся случайным образом.
// Обратите внимание. В rgba последний параметр — это прозрачность, а не насыщенность.
//  Поэтому для задания цвета колонок других игроков нужно использовать hsl.
// Обратите внимание. Функцию отрисовки статистики вызывать не надо.
//  Её будет вызывать непосредственно сама игра из файла js/game.js.
// Обратите внимание. Время прохождения игры должно быть округлено к целому числу.
