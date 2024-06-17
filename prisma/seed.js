const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs')

async function seeder() {
  try {
    const role = await prisma.mst_role.createMany({
      data: [
        {
          nama_role: "Vendor",
        },
        {
          nama_role: "Staff",
        },
        {
          nama_role: "Manager",
        },
        {
          nama_role: "Admin",
        },
      ],
    });

    const jenis_document = await prisma.mst_jenis_document.createMany({
      data: [
        {
          nama_document: "Surat Permohonan menjadi DRM",
        },
        {
          nama_document: "Akta pendirian beserta perubahan terakhir",
        },
        {
          nama_document:
            "Akta perubahan Anggaran Dasar (AD) beserta Surat Keputusan/Surat Penerimaan Pemberitahuan Menteri Hukum dan HAM",
        },
        {
          nama_document:
            "Tanda Daftar Perusahaan (TDP)/ Nomor Induk Berusaha (NIB)",
        },
        {
          nama_document: "Surat Ijin Usaha Perdagangan (SILUP)/ Izin Usaha OSS",
        },
        {
          nama_document:
            "Surat Ijin Tempat Usaha (SITUJ/ Surat Keterangan Domisili Usaha (SKDU)/zin Lokasi OSS",
        },
        {
          nama_document: "Nomor Pokok Wajib Pajak (NPWP)",
        },
        {
          nama_document: "Surat Pengukuhan Pengusaha Kena Pajak (SPPKP)",
        },
        {
          nama_document:
            "Surat Keterangan Fiskal atau SPT Tahunan terakhir dan SPT Masa PPN, dilengkapi bukti setor",
        },
        {
          nama_document:
            "KTP Pimpinan Perusahaan dan Struktur Organisasi Perusahaan",
        },
        {
          nama_document:
            "Daftar Pengalaman pekerjaan dan portofolio pekerjaan minimal 5 thun terakhir",
        },
        {
          nama_document: "Company Profile",
        },
        {
          nama_document: "Document Pendukung Lainya",
        },
      ],
    });

    const jenis_sertifikasi = await prisma.mst_jenis_sertifikasi.createMany({
      data: [
        {
          nama_sertifikasi: "Pengadaan Barang dan Jasa",
        },
        {
          nama_sertifikasi: "Jasa Konsultasi",
        },
        {
          nama_sertifikasi: "Jasa Lainnya",
        },
        {
          nama_sertifikasi: "Lainnya",
        },
      ],
    });

    const satuan = await prisma.mst_satuan.createMany({
      data: [
        {
          nama_satuan: "Unit",
        },
        {
          nama_satuan: "KG",
        },
        {
          nama_satuan: "Ton",
        },
        {
          nama_satuan: "Pcs",
        },
      ],
    });

    const kurs = await prisma.mst_kurs.createMany({
      data: [
        {
          nama_kurs: "USD",
        },
        {
          nama_kurs: "IDR",
        },
      ],
    });

    const jenis_product = await prisma.mst_jenis_product.createMany({
      data: [
        {
          nama_jenis_product: "Mineral",
        },
        {
          nama_jenis_product: "Aquaculture",
        },
        {
          nama_jenis_product: "Horticultural",
        },
        {
          nama_jenis_product: "Agricultural",
        },
        {
          nama_jenis_product: "Farm Fields",
        },
      ],
    });

    const status = await prisma.mst_status.createMany({
      data: [
        {
          kode_status: "VMSWPI00001",
          nama_status: "Terverifikasi",
          group_status: "status_verifikasi_drm",
        },
        {
          kode_status: "VMSWPI00002",
          nama_status: "Tolak",
          group_status: "status_verifikasi_drm",
        },
        {
          kode_status: "VMSWPI00003",
          nama_status: "Penawaran Diajukan",
          group_status: "status_proses_penawaran",
        },
        {
          kode_status: "VMSWPI00004",
          nama_status: "Penawaran Dipilih Staff",
          group_status: "status_proses_penawaran",
        },
        {
          kode_status: "VMSWPI00005",
          nama_status: "Penawaran Dipilih Manager",
          group_status: "status_proses_penawaran",
        },
        {
          kode_status: "VMSWPI00006",
          nama_status: "Penawaran Ditolak Staff",
          group_status: "status_proses_penawaran",
        },
        {
          kode_status: "VMSWPI00007",
          nama_status: "Penawaran Ditolak Manager",
          group_status: "status_proses_penawaran",
        },
        {
          kode_status: "VMSWPI00008",
          nama_status: "Berlaku",
          group_status: "status_penawaran",
        },
        {
          kode_status: "VMSWPI00009",
          nama_status: "Tidak Berlaku",
          group_status: "status_penawaran",
        },
        {
          kode_status: "VMSWPI00010",
          nama_status: "Sudah Upload",
          group_status: "status_upload_document",
        },
        {
          kode_status: "VMSWPI00011",
          nama_status: "Belum Upload",
          group_status: "status_upload_document",
        },
      ],
    });

    const hashedPassword = await bcrypt.hash("p@ssw0rd", 10);

    const user = await prisma.user.createMany({
      data: [
        {
          npwp: "123",
          email: "ptwpi@gmail.com",
          username: "ptwpi",
          password: hashedPassword,
          nama_perusahaan: "PT Warung Pangan Indonesia",
          nama_pic: "Farhan",
          no_telephone: "085710116209",
          id_role: 1,
          id_status: 1,
        },
        {
          nip: "001",
          email: "staff@ptwpi.co.id",
          username: "staff",
          password: hashedPassword,
          nama_perusahaan: "PT Warung Pangan Indonesia",
          nama_pic: "Dece",
          no_telephone: "085710116209",
          id_role: 2,
        },
        {
          nip: "002",
          email: "manager@ptwpi.co.id",
          username: "manager",
          password: hashedPassword,
          nama_perusahaan: "PT Warung Pangan Indonesia",
          nama_pic: "Farhan DC",
          no_telephone: "085710116209",
          id_role: 3,
        },
        {
          nip: "003",
          email: "admin@ptwpi.co.id",
          username: "admin",
          password: hashedPassword,
          nama_perusahaan: "PT Warung Pangan Indonesia",
          nama_pic: "Farhan Dwicahyo",
          no_telephone: "085710116209",
          id_role: 4,
        },
      ],
    });

    const provinsi = await prisma.mst_provinsi.createMany({
      data: [
        { nama_provinsi: "Jawa Barat" },
        { nama_provinsi: "Jawa Tengah" },
        { nama_provinsi: "Jawa Timur" },
        { nama_provinsi: "DKI Jakarta" },
        { nama_provinsi: "Banten" }
      ]
    });

    const kota = await prisma.mst_kota.createMany({
      data: [
        { id_provinsi: 1, nama_kota: "Bandung" },
        { id_provinsi: 1, nama_kota: "Bekasi" },
        { id_provinsi: 2, nama_kota: "Semarang" },
        { id_provinsi: 2, nama_kota: "Solo" },
        { id_provinsi: 3, nama_kota: "Surabaya" },
        { id_provinsi: 3, nama_kota: "Malang" },
        { id_provinsi: 4, nama_kota: "Jakarta Pusat" },
        { id_provinsi: 4, nama_kota: "Jakarta Selatan" },
        { id_provinsi: 5, nama_kota: "Serang" },
        { id_provinsi: 5, nama_kota: "Tangerang" }
      ]
    });

    const userDocuments = await prisma.user_Document.createMany({
      data: [
        {
          id_user: 1,
          nama_document: "Surat Permohonan menjadi DRM",
          id_jenis_document: 1,
          tanggal_berlaku: new Date('2023-01-01'),
          tanggal_berakhir: new Date('2024-01-01'),
          id_status: 1,
          file: "document1.pdf"
        },
        {
          id_user: 1,
          nama_document: "Akta pendirian beserta perubahan terakhir",
          id_jenis_document: 2,
          tanggal_berlaku: new Date('2022-01-01'),
          tanggal_berakhir: new Date('2023-01-01'),
          id_status: 1,
          file: "document2.pdf"
        }
      ]
    });

    const userSertifikasi = await prisma.user_Sertifikasi.createMany({
      data: [
        {
          id_user: 1,
          nama_sertifikasi: "Pengadaan Barang dan Jasa",
          id_jenis_sertifikasi: 1,
          tanggal_berlaku: new Date('2023-01-01'),
          tanggal_berakhir: new Date('2024-01-01'),
          file: "sertifikat1.pdf"
        },
        {
          id_user: 1,
          nama_sertifikasi: "Jasa Konsultasi",
          id_jenis_sertifikasi: 2,
          tanggal_berlaku: new Date('2022-01-01'),
          tanggal_berakhir: new Date('2023-01-01'),
          file: "sertifikat2.pdf"
        }
      ]
    });

    const userProduct = await prisma.user_Product.createMany({
      data: [
        {
          id_user: 1,
          brand: "Brand A",
          price: 1000.0,
          id_kurs: 1,
          stock: 100,
          volume: "10 KG",
          id_satuan: 2,
          address: "Jl. ABC No. 1",
          item_image: "product1.jpg",
          description: "Product Description 1",
          id_jenis_product: 1,
          id_provinsi: 1,
          id_kota: 1,
          company_category: "Category A",
          storage_type: "Cold Storage",
          packaging: "Packaged"
        },
        {
          id_user: 1,
          brand: "Brand B",
          price: 2000.0,
          id_kurs: 1,
          stock: 200,
          volume: "20 KG",
          id_satuan: 2,
          address: "Jl. DEF No. 2",
          item_image: "product2.jpg",
          description: "Product Description 2",
          id_jenis_product: 2,
          id_provinsi: 1,
          id_kota: 1,
          company_category: "Category B",
          storage_type: "Dry Storage",
          packaging: "Loose"
        }
      ]
    });

    const userPengalaman = await prisma.user_Pengalaman.createMany({
      data: [
        {
          id_user: 1,
          nama_klien: "Client A",
          nama_proyek: "Project A",
          id_kurs: 1,
          nilai_proyek: 5000.0,
          no_kontrak: "CONTRACT123",
          kontak_klien: "08123456789",
          tanggal_mulai: new Date('2021-01-01'),
          tanggal_selesai: new Date('2022-01-01')
        },
        {
          id_user: 1,
          nama_klien: "Client B",
          nama_proyek: "Project B",
          id_kurs: 1,
          nilai_proyek: 10000.0,
          no_kontrak: "CONTRACT456",
          kontak_klien: "08198765432",
          tanggal_mulai: new Date('2022-01-01'),
          tanggal_selesai: new Date('2023-01-01')
        }
      ]
    });

    const userPenawaran = await prisma.user_Penawaran.createMany({
      data: [
        {
          no_penawaran: "OFF123",
          id_user: 1,
          id_status_proses_penawaran: 3,
          id_status_penawaran: 8,
          id_product: 1,
          tanggal_dibuat_penawaran: new Date('2023-05-01'),
          tanggal_mulai_penawaran: new Date('2023-06-01'),
          tanggal_berakhir_penawaran: new Date('2023-12-01'),
          Terms_of_Payment: "30 days",
          Terms_of_Delivery: "FOB",
          description: "Penawaran Description 1"
        },
        {
          no_penawaran: "OFF456",
          id_user: 1,
          id_status_proses_penawaran: 3,
          id_status_penawaran: 8,
          id_product: 2,
          tanggal_dibuat_penawaran: new Date('2023-05-01'),
          tanggal_mulai_penawaran: new Date('2023-06-01'),
          tanggal_berakhir_penawaran: new Date('2023-12-01'),
          Terms_of_Payment: "60 days",
          Terms_of_Delivery: "CIF",
          description: "Penawaran Description 2"
        }
      ]
    });

    const userPO = await prisma.user_PO.createMany({
      data: [
        {
          no_po: "PO123",
          no_penawaran: "OFF123",
          id_user: 1,
          id_product: 1,
          tanggal_dibuat_po: new Date('2023-05-15'),
          tanggal_mulai_po: new Date('2023-06-15'),
          tanggal_berakhir_po: new Date('2023-12-15'),
          Terms_of_Payment: "30 days",
          Terms_of_Delivery: "FOB",
          description: "PO Description 1"
        },
        {
          no_po: "PO456",
          no_penawaran: "OFF456",
          id_user: 1,
          id_product: 2,
          tanggal_dibuat_po: new Date('2023-05-15'),
          tanggal_mulai_po: new Date('2023-06-15'),
          tanggal_berakhir_po: new Date('2023-12-15'),
          Terms_of_Payment: "60 days",
          Terms_of_Delivery: "CIF",
          description: "PO Description 2"
        }
      ]
    });

    const userHistory = await prisma.user_History.createMany({
      data: [
        {
          id_status: 1,
          id_user: 1
        },
        {
          id_status: 2,
          id_user: 1
        }
      ]
    });

    console.log("Seeding success");
  } catch (error) {
    console.error("Failed to seed database", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

seeder();
