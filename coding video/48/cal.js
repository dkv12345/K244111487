const thuchienpheptoan = (a, b, pt) => {
  const cacPhepToan = {
    "+": a + b,
    "-": a - b,
    "*": a * b,
    "/": b !== 0 ? a / b : "Lỗi: Không thể chia cho 0"
  };

  return cacPhepToan[pt] !== undefined ? cacPhepToan[pt] : "Phép toán không hợp lệ";
};