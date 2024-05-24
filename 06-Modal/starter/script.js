'use strict';

const modal = document.querySelector('.modal'); //เราใช้ .xxx ในวงเล็บเพราะเป็น selector
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  console.log('Button Click');
  modal.classList.remove('hidden'); //เราไม่ใช้ .แบบตัว selector เพระาอันนี้เราแค่ส่งชื่อคลาสเข้าไปเฉย ๆ ไม่ได้เลือกอะไร
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  // textContent ต่อท้ายเพื่อเวลา log ออกมาจะได้แค่ตัวอักษร บน element นั้น ๆ
  //   console.log(btnsOpenModal[i].textContent);

  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  //ถ้ากดปุ่ม ESC และ ถ้า modal ไม่ได้มีคลาส hidden ให้ฟังก์ชันปิดป๊อปอัพทำงาน ภายใต้อีเว้นท์addEventListene ('keydown', function (e)
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//- เรียนรู้การเรียกใช้งาน element หลายตัวที่มีคลาสเดียวกัน
//- property classList.remove/.add
//- เรียนรู้อีเว้นท์ใหม่ addEventListener('keydown')
//- เรียนรู้เรื่องของการเช็กว่าใน element นั้นมีคลาสอยู่ไหมโดยการใช้ .classList.contains('ชื่อคลาส')
