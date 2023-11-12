require("dotenv").config();

const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    // ambil request header authorization
    const header = req.headers.authorization;
    // ngecek jika header tidak ada maka
    if (!header) throw new Error("invalid header");
    // data yang didapatkan dari header authorization itu berupa beare token
    // tokenya kita split kita hanya ambil tokennya tidak perlu Bearernya
    const token = header.split(" ")[1];
    // ngecek jika token tidak ada
    if (!token) throw new Error("there is no token");

    // kemudian verifikasikan token  dengan key token
    const verifyToken = jwt.verify(token, process.env.JWT_KEY);
    // setelah berhasil verify token maka hasil dari verify token
    // akan di masukan kembali kedalam request user
    req.user = verifyToken;

    // artinya jika verifytoken berhasil di verify dan sudah dimasukan kedalam
    // request/ req user maka user di perbolehkan untuk melanjutkan / istilah disini
    // itu next berarti next ke tahap selanjutnya
    next();
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = verifyToken;
