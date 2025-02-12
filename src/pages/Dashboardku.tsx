import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { Male, Female } from "@mui/icons-material";

interface Mahasiswa {
  no: number;
  nim: string;
  nama: string;
  gender: string;
  prodi: string;
  kelas: string;
  semester: number;
  alamat: string;
  hobby: string;
  citaCita: string;
}

export default function TabelMahasiswa() {
  const data: Mahasiswa[] = [
    { no: 1, nim: "220001", nama: "Harist Fadlilah", gender: "L", prodi: "Sistem Informasi", kelas: "Karyawan", semester: 4, alamat: "Bandung", hobby: "Ngoding Nyantai", citaCita: "Software Engineer" },
    { no: 2, nim: "220002", nama: "Siti", gender: "P", prodi: "Sistem Informasi", kelas: "B", semester: 4, alamat: "Jakarta", hobby: "Menulis", citaCita: "Data Analyst" },
    { no: 3, nim: "220003", nama: "Budi", gender: "L", prodi: "Teknik Elektro", kelas: "C", semester: 4, alamat: "Surabaya", hobby: "Gaming", citaCita: "Network Engineer" },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Tabel Mahasiswa</h1>

      {/* Tampilkan tabel hanya di desktop */}
      <div className="hidden md:block">
        <TableContainer component={Paper} className="shadow-lg rounded-lg">
          <Table>
            <TableHead>
              <TableRow className="bg-blue-600 text-white">
                <TableCell className="text-white font-semibold">No</TableCell>
                <TableCell className="text-white font-semibold">NIM</TableCell>
                <TableCell className="text-white font-semibold">Nama</TableCell>
                <TableCell className="text-white font-semibold">Gender</TableCell>
                <TableCell className="text-white font-semibold">Prodi</TableCell>
                <TableCell className="text-white font-semibold">Kelas</TableCell>
                <TableCell className="text-white font-semibold">Semester</TableCell>
                <TableCell className="text-white font-semibold">Alamat</TableCell>
                <TableCell className="text-white font-semibold">Hobby</TableCell>
                <TableCell className="text-white font-semibold">Cita-cita</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.no} className="hover:bg-gray-100">
                  <TableCell>{item.no}</TableCell>
                  <TableCell>{item.nim}</TableCell>
                  <TableCell className="font-semibold text-gray-800">{item.nama}</TableCell>
                  <TableCell className="flex items-center">
                    {item.gender === "L" ? <Male className="text-blue-500" /> : <Female className="text-pink-500" />}
                  </TableCell>
                  <TableCell>{item.prodi}</TableCell>
                  <TableCell>{item.kelas}</TableCell>
                  <TableCell>{item.semester}</TableCell>
                  <TableCell>{item.alamat}</TableCell>
                  <TableCell>{item.hobby}</TableCell>
                  <TableCell>{item.citaCita}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Tampilkan kartu hanya di tampilan mobile */}
      <div className="block md:hidden">
        {data.map((item) => (
          <div key={item.no} className="mb-4 p-6 border rounded-lg shadow-lg bg-white">
            <p className="font-bold text-lg text-gray-800">{item.nama} ({item.nim})</p>
            <p className="text-gray-600 flex items-center">
              Gender: {item.gender === "L" ? <Male className="text-blue-500 ml-2" /> : <Female className="text-pink-500 ml-2" />}
            </p>
            <p className="text-gray-600">Prodi: {item.prodi}</p>
            <p className="text-gray-600">Kelas: {item.kelas}</p>
            <p className="text-gray-600">Semester: {item.semester}</p>
            <p className="text-gray-600">Alamat: {item.alamat}</p>
            <p className="text-gray-600">Hobby: {item.hobby}</p>
            <p className="text-gray-600">Cita-cita: {item.citaCita}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
