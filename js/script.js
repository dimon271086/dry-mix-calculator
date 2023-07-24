function calculate() {
	const type = document.getElementById('type').value;
	const area = parseFloat(document.getElementById('area').value);
	const thickness = parseFloat(document.getElementById('thickness').value);
 
	if (isNaN(area) || isNaN(thickness)) {
	  alert('Пожалуйста, введите корректные значения площади и толщины слоя.');
	  return;
	}
 
	let result;
	switch (type) {
	  case 'цементно-песчаная':
		 result = calculateCementSandMix(area, thickness);
		 break;
	  case 'штукатурная':
		 result = calculatePlasterMix(area, thickness);
		 break;
	  case 'кладочная':
		 result = calculateMasonryMix(area, thickness);
		 break;
	  default:
		 result = 'Выберите тип строительной смеси.';
	}
 
	document.getElementById('result').innerText = `Необходимое количество смеси: ${result} кг`;
 }
 
 function calculateCementSandMix(area, thickness) {
	// Ваш код для расчета количества смеси цементно-песчаной
	// Например, пусть это будет простейший расчет: площадь * толщину слоя * коэффициент
	const coefficient = 1.8; // Примерный коэффициент для цементно-песчаной смеси
	return (area * thickness * coefficient).toFixed(2);
 }
 
 function calculatePlasterMix(area, thickness) {
	// Ваш код для расчета количества штукатурной смеси
	// Аналогично примеру выше
	const coefficient = 2.3; // Примерный коэффициент для штукатурной смеси
	return (area * thickness * coefficient).toFixed(2);
 }
 
 function calculateMasonryMix(area, thickness) {
	// Ваш код для расчета количества кладочной смеси
	// Аналогично примерам выше
	const coefficient = 2.5; // Примерный коэффициент для кладочной смеси
	return (area * thickness * coefficient).toFixed(2);
 }
 
