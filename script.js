// ตัวอย่างฟังก์ชันสำหรับการคลิก Read More เพื่อแสดงรายละเอียดเพิ่มเติม
document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    alert('กำลังดำเนินการแสดงรายละเอียดเพิ่มเติม...');
    // ส่วนนี้สามารถปรับให้เปิดเนื้อหาแบบซ่อน/แสดงได้ตามต้องการ
  });
});

document.getElementById('loanForm').addEventListener('submit', function(e) {
  e.preventDefault(); // ยับยั้งการ submit ปกติ

  // ตรวจสอบค่าข้อมูล
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const amount = document.getElementById('amount').value.trim();
  const loanType = document.getElementById('loanType').value;

  if (!name || !phone || !email || !amount || !loanType) {
    alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    return;
  }

  // ตัวอย่างการส่งข้อมูล (สามารถปรับเป็น AJAX หรือส่งไปเซิร์ฟเวอร์ได้)
  alert('ส่งข้อมูลเรียบร้อยแล้ว ขอบคุณที่สมัครสินเชื่อ!');
  
  // รีเซ็ตฟอร์มหลังส่งข้อมูล
  document.getElementById('loanForm').reset();
});

// ตัวอย่าง: ถ้าต้องการเพิ่มการควบคุมพิเศษ
// แต่ในกรณีนี้ Bootstrap จัดการให้โดยอัตโนมัติแล้ว
document.addEventListener('DOMContentLoaded', () => {
  // โค้ดเพิ่มเติมได้ที่นี่
});
