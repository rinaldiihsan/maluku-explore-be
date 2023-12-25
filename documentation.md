# API Documentation Web Maluku-Explore

<p style= "text-align : justify;">Dokumentasi ini berisi tentang informasi yang anda butuhkan untuk berinteraksi dengan API Web Maluku-Explore. Anda akan menemukan daftar lengkap dari end-point yang tersedia beserta detail dari permintaan dan respons yang diharapkan. Gunakan dokumentasi ini sebagai paduan anda untuk mengintergrasikan dan menguji API Web Maluku-Explore.
</p>

---

## USER

Section ini berisi tentang permintaan terkait pengelolaan user, termasuk dengan registrasi user dan juga login user.

### Login

```
localhost:3000/auth/login
```

- Deskripsi : Permintaan ini dipergunakan untuk login kedalam Website Maluku-Explore, yang akan menghasilkan JWT (Json Web Token)
- Metode : Post
- Contoh Request:

```
{
    "email" : "john@gmail.com",
    "password": "123"
}
```

- Contoh Response Login:

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlJpbmFsZGkgSWhzYW4iLCJlbWFpbCI6Imloc2FuQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzAzNDAzNDkyLCJleHAiOjE3MDM0MDM1MTJ9.VKnpL6kV_Qsxjzp-0PtzsGKjN-rLqUteh0AekpNsQDw"
}
```

### Register

```
localhost:3000/auth/register
```

- Deskripsi : Permintaan ini digunakan pengguna/user dalam melakukan register sebelum login kedalam Web Maluku-Explore. Password akan otomatis ter-hash agar meningkatkan keamanan data pengguna.
- Metode : Post
- Contoh Request :

```
{
    "namaLengkap": "John Doe",
    "email": "john@gmail.com",
    "deskripsi": "lorem ipsum dolor sit amet",
    "password": "123"
}
```

- Contoh Response Register

```
{
    "data": {
        "message": "user berhasil dibuat!",
        "role": "user"
    }
}
```

### Logout

```
localhost:3000/auth/logout
```

- Deskripsi : Permintaan ini digunakan pengguna/user dalam melakukan sesi logout/keluar dari Web Maluku-Explore.
- Method : DELETE
- Contoh Response Logout

```
{
    "data"{
        "message" : "Logout Berhasil !"
    }
}
```

### Refresh Token

```
localhost:3000/auth/token
```

- Deskripsi : Permintaan ini digunakan pengguna/user dalam melakukan refresh token.
- Method : GET
- Contoh Response Refresh Token

```
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtYUxlbmdrYXAiOiJSaW5hbGRpIEloc2FuIiwiZW1haWwiOiJpaHNhbkBnbWFpbC5jb20iLCJkZXNrcmlwc2kiOiJsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCIsImlhdCI6MTcwMzQ5MTE4OCwiZXhwIjoxNzAzNDkxMjA4fQ.4-jTblUHGavty2MyXOyA_fC8Ey6ulKIOEUFim7BWZa4"
}
```

*Note: Refresh Token akan bisa didapatkan setelah melakukan login terlebih dahulu.*

---

## Blog

Section ini berisi permintaan terkait dengan management Blog, termasuk kedalam pembuatan, pembaharuan, penghapusan data, serta pengambilan data Blog.

### GetAll-Blog

```
localhost:3000/blog/get/
```

- Deskripsi : Permintaan ini digunakan dalam mengambil daftar semua Blog yang ada.
- Metode : GET
- Contoh Response :

```
{
    "data": [
            {
                "id": 1,
                "title": "buryam! Typical Food of Maluku Province.",
                "body": "lorem1 ipsum dolor sit amet",
                "imageId": 1,
                "createdAt": "2023-12-24T11:23:41.000Z",
                "updatedAt": "2023-12-24T11:24:06.000Z"
            }
        ]
}
```

### GetById-Blog

```
localhost:3000/blog/get/:id
```

- Deskripsi : Permintaan ini digunakan dalam mengambil daftar Blog berdasarkan dari id Blog
- Metode : GET
- Contoh Response :

```
{
    "data": {
        "id": 1,
        "title": "buryam! Typical Food of Maluku Province.",
        "body": "lorem1 ipsum dolor sit amet",
        "imageId": 1,
        "createdAt": "2023-12-24T11:23:41.000Z",
        "updatedAt": "2023-12-24T11:24:06.000Z"
    }
}
```

### Create-Blog

```
localhost:3000/blog/create/
```

- Deskripsi : Permintaan ini dipergunakan untuk membuat sebuah blog baru.
- Metode : POST
- Contoh Request Create-Blog :

```
{
    "title" : "Papeda! Typical Food of Maluku Province.",
    "body" : "lorem ipsum dolor sit amet",
    "imageId" : 1
}
```

- Contoh Response Create-Blog :

```
{
    "data": {
        "message": "Data berhasil ditambahkan!"
    }
}
```

### Update-Blog

```
localhost:3000/blog/update/:id
```

- Deskripsi : Permintaan ini digunakan dalam memperbaharui Blog yang sudah ada, berdasarkan id Blog tersebut.
- Metode : PUT
- Contoh Request :

```
{
    "title" : "Papeda food! Typical Food of Maluku Province.",
    "body" : "lorem ipsum dolor sit amet",
    "imageId" : 1
}
```

- Contoh Response :

```
{
    "data": {
        "message": "Blog berhasil diubah!"
    }
}
```

### Delete-Blog

```
localhost:3000/blog/delete/:id
```

- Deskripsi : Permintaan ini digunakan dalam menghapus Blog yang sudah ada berdasarkan dari id Blog tersebut.
- Metode : DELETE
- Contoh Response :

```
{
    "data" : {
        "message" : "Data Berhasil dihapus!"
    }
}
```

---

## Image Blog

Section ini berisi permintaan terkait dengan management Gambar di Blog, termasuk kedalam pembuatan, pembaharuan, penghapusan data, penguploadan gambar untuk menampilkan berbagai macam wisata yang berada di Maluku.

### getAll-imageBlog

```
localhost:3000/imageBlog/get/
```

- Deskripsi : Permintaan ini dipergunakan untuk memanggil atau mengambil data yang ada di database.
- Metode : GET
- Contoh Response getAll-imageBlog :

```
{
    "data": [
        {
            "id": 1,
            "image": "upload\\imagesTour\\pngwing.com (12).png",
            "createdAt": "2023-12-24T11:28:54.000Z",
            "updatedAt": "2023-12-24T11:28:54.000Z"
        }
    ]
}
```

### getById-imageBlog

```
localhost:3000/imageBlog/getById/:id
```

- Deskripsi : Permintaan ini dipergunakan untuk memanggil atau mengambil data berdasarkan id pada database.
- Metode : GET
- Contoh Response getById-imageBlog :

```
{
    "data": {
        "id": 1,
        "image": "upload\\imagesTour\\pngwing.com (12).png",
        "createdAt": "2023-12-24T11:28:54.000Z",
        "updatedAt": "2023-12-24T11:28:54.000Z"
    }
}
```

### get-image - imageBlog

```
localhost:3000/imageBlog/get-image/:id
```

- Deskripsi : Permintaan ini dipergunakan untuk menampilkan gambar atau preview data yang berada di database.
- Metode : GET
- Contoh Response get-image - imageBlog :

```
menampilkan gambar preview di database.
```

### Create-imageBlog

```
localhost:3000/imageBlog/create/
```

- Deskripsi : Permintaan ini dipergunakan untuk mengupload gambar untuk tampilan wisata dan di ambil datanya saat membuat Tour (tampilan wisata).
- Metode : POST
- Contoh Request Create-imageBlog :

```
- Buka body, kemudian ke form-data
- Lalu buat key dengan nama "image" lalu ubah type nya ke file di pojok kanan teks.
- Kemudian upload gambar yang ingin di unggah, lalu tekan SEND.
```

- Contoh Response Create-imageBlog :

```
{
    "data": {
        "message": "Gambar berhasil ditambahkan!"
    }
}
```

### Update-imageBlog

```
localhost:3000/imageBlog/update/:id
```

- Deskripsi : Permintaan ini dipergunakan untuk mengubah atau memperbaharui gambar yang ada di database berdasarkan id.
- Metode : PUT
- Contoh Request Update-imageBlog :

```
- Pertama-tama masukkan endpoint id yang ingin diubah gambarnya.
- Kemudian buka body, lalu ke form-data.
- Lalu buat key dengan nama "image" lalu ubah type nya ke file di pojok kanan teks.
- Kemudian upload gambar yang ingin di unggah, lalu tekan SEND.
```

- Contoh Response Update-imageBlog :

```
{
    "message": "Gambar Berhasil Diupdate!"
}
```

### Delete-imageBlog

```
localhost:3000/imageBlog/delete/:id
```

- Deskripsi : Permintaan ini dipergunakan untuk menghapus data berdasarkan id pada database.
- Metode : DELETE
- Contoh Response delete-imageBlog :

```
{
    "data": {
        "message" : "Gambar Berhasil dihapus!"
    }
}
```

---

## Order

Section ini berisi terkait menagament Order, termasuk dalam pembuatan, pembaharuan, penghapusan, serta pengambilan data Order.

### GetAll-Order

```
localhost:3000/order/get
```

- Deskripsi : permintaan ini digunakan dalam mengambil semua data daftar Order yang ada.
- Metode : GET
- Contoh Response :

```
{
    "data": [
        {
            "id": 2,
            "UserId": 1,
            "TempatWisataId": 1,
            "jumlahTiket": 3,
            "tanggalOrder": "2023-12-22T00:00:00.000Z",
            "totalHarga": 15000,
            "createdAt": "2023-12-24T11:31:34.000Z",
            "updatedAt": "2023-12-24T11:31:34.000Z",
        }
    ]
}
```

### GetById-Order

```
localhost:3000/order/get/:id
```

- Deskripsi : Permintaan ini digunakan dalam mengambil daftar data Order melaui id Order.
- Metode : GET
- Contoh Response :

```
{
    "data": {
        "id": 2,
        "UserId": 1,
        "TempatWisataId": 1,
        "jumlahTiket": 3,
        "tanggalOrder": "2023-12-22T00:00:00.000Z",
        "totalHarga": 15000,
        "createdAt": "2023-12-24T11:31:34.000Z",
        "updatedAt": "2023-12-24T11:31:34.000Z",
    }
}
```

### Create-Order

```
localhost:3000/order/create
```

- Deskripsi : Permintaan ini digunakan dalam pembuatan data Order baru didalam Website Maluku-Explore.
- Metode : POST
- Contoh Request :

```
{
    "UserId" : 1,
    "TempatWisataId" : 1,
    "jumlahTiket": 3,
    "tanggalOrder": "2023-12-22",
    "totalHarga": 15000
}
```

- Contoh Response :

```
{
    "data": {
        "message": "Data berhasil ditambahkan!"
    }
}
```

### Update-Order

```
localhost:3000/order/update/:id
```

- Deskripsi : Permintaan ini digunakan dalam memperbaharui data Order yang sudah ada, berdasarkan id Order tersebut.
- Metode : PUT
- Contoh Request :

```
{
    "UserId" : 1,
    "TempatWisataId" : 1,
    "jumlahTiket": 4,
    "tanggalOrder": "2023-12-22",
    "totalHarga": 20000
}
```

- Contoh hasil Response :

```
{
    "data":{
        "message" : "Data Berhasil diubah!"
    }
}
```

### Delete-Order

```
localhost:3000/order/delete/:id
```

- Deskripsi : Permintaan ini digunakan dalam menghapus data Order yang sudah ada berdasarkan dari Id Order tersebut.
- Metode : DELETE
- Contoh Response :

```
{
    "data": {
        "message" : "Data Berhasil dihapus!"
    }
}
```

---

## Tour

Section ini berisi permintaan terkait dengan management Tour, termasuk kedalam pembuatan, pembaharuan, penghapusan data.

### getAll-Tour

```
localhost:3000/Tour/get/
```

- Deskripsi : Permintaan ini dipergunakan untuk memanggil atau mengambil data yang ada di database.
- Metode : GET
- Contoh Response update-Tour :

```
{
    "data": [
        {
            "id": 1,
            "nama": "Pantai Natsepa",
            "kota": "Maluku Tengah",
            "harga": 5000,
            "deskripsi": "Wisata pantai utama yang paling terkenal di Pulau Ambon adalah Pantai Natsepa. Pantap merupakan desta Natsepa merupakan destinasi parawisatawan dalam maupun luar negeri yang mau menikmati pasir putih dan udara pantai yang segar. Pemandangan sore hari di Pantai Natsepa saat matahari akan terbenam sangat menawan. Duduk santai bersama teman-teman ataupun keluarga sambil bercerita sambil menikmati Sunset.",
            "imageId": 1,
            "createdAt": "2023-12-24T11:29:14.000Z",
            "updatedAt": "2023-12-24T11:29:14.000Z"
        }
    ]
}
```

### getById-Tour

```
localhost:3000/Tour/getById/:id
```

- Deskripsi : Permintaan ini dipergunakan untuk memanggil atau mengambil data berdasarkan id pada database.
- Metode : GET
- Contoh Response getById-Tour :

```
{
    "data": {
        "id": 1,
        "nama": "Pantai Natsepa",
        "kota": "Maluku Tengah",
        "harga": 5000,
        "deskripsi": "Wisata pantai utama yang paling terkenal di Pulau Ambon adalah Pantai Natsepa. Pantap merupakan desta Natsepa merupakan destinasi parawisatawan dalam maupun luar negeri yang mau menikmati pasir putih dan udara pantai yang segar. Pemandangan sore hari di Pantai Natsepa saat matahari akan terbenam sangat menawan. Duduk santai bersama teman-teman ataupun keluarga sambil bercerita sambil menikmati Sunset.",
        "imageId": 1,
        "createdAt": "2023-12-24T11:29:14.000Z",
        "updatedAt": "2023-12-24T11:29:14.000Z"
    }
}
```

### create-Tour

```
localhost:3000/Tour/create/
```

- Deskripsi : Permintaan ini dipergunakan untuk membuat sebuah tampilan tour baru
- Metode : POST
- Contoh Request Create-Tour :

```
{
    "nama" : "Pantai Natsepa",
    "kota" : "Maluku Tengah",
    "harga" : 5000,
    "deskripsi" : "Wisata pantai utama yang paling terkenal di Pulau Ambon adalah Pantai Natsepa. Pantap merupakan desta Natsepa merupakan destinasi parawisatawan dalam maupun luar negeri yang mau menikmati pasir putih dan udara pantai yang segar. Pemandangan sore hari di Pantai Natsepa saat matahari akan terbenam sangat menawan. Duduk santai bersama teman-teman ataupun keluarga sambil bercerita sambil menikmati Sunset.",
    "imageId": 1
}
```

- Contoh Response create-Tour :

```
{
    "message": "Data Berhasil Ditambahkan!"
}
```

### update-Tour

```
localhost:3000/Tour/update/:id
```

- Deskripsi : Permintaan ini dipergunakan untuk mengubah atau memperbaharui data yang ada di database berdasarkan id.
- Metode : POST
- Contoh Request Update-Tour :

```
{
    "nama" : "Pantai Saranjana",
    "kota" : "Maluku Timur",
    "harga" : 15000,
    "deskripsi" : "Wisata pantai utama yang paling terkenal di Pulau Maluku adalah Pantai Saranjana. Pantap merupakan desta Saranjana merupakan destinasi parawisatawan dalam maupun luar negeri yang mau menikmati pasir putih dan udara pantai yang segar. Pemandangan sore hari di Pantai Natsepa saat matahari akan terbenam sangat menawan. Duduk santai bersama teman-teman ataupun keluarga sambil bercerita sambil menikmati Sunset.",
    "imageId": 1
}
```

- Contoh Response update-Tour :

```
{
    "message": "Data Berhasil Diubah!"
}
```

### delete-Tour

```
localhost:3000/Tour/delete/:id
```

- Deskripsi : Permintaan ini dipergunakan untuk menghapus data berdasarkan id pada database.
- Metode : DELETE
- Contoh Response delete-Tour :

```
 {
        "message" : "Data Berhasil dihapus!"
}
```

---

## Image Tour

Section ini berisi permintaan terkait dengan management Gambar di Tour, termasuk kedalam pembuatan, pembaharuan, penghapusan data, penguploadan gambar untuk menampilkan berbagai macam wisata yang berada di Maluku.

### getAll-imageTour

```
localhost:3000/imageTour/get/
```

- Deskripsi : Permintaan ini dipergunakan untuk memanggil atau mengambil data yang ada di database.
- Metode : GET
- Contoh Response getAll-imageTour :

```
{
    "data": [
        {
            "id": 1,
            "image": "upload\\imagesTour\\pngwing.com (12).png",
            "createdAt": "2023-12-24T11:28:54.000Z",
            "updatedAt": "2023-12-24T11:28:54.000Z"
        }
    ]
}
```

### getById-imageTour

```
localhost:3000/imageTour/getById/:id
```

- Deskripsi : Permintaan ini dipergunakan untuk memanggil atau mengambil data berdasarkan id pada database.
- Metode : GET
- Contoh Response getById-imageTour :

```
{
    "data": {
        "id": 1,
        "image": "upload\\imagesTour\\pngwing.com (12).png",
        "createdAt": "2023-12-24T11:28:54.000Z",
        "updatedAt": "2023-12-24T11:28:54.000Z"
    }
}
```

### get-image - imageTour

```
localhost:3000/imageTour/get-image/:id
```

- Deskripsi : Permintaan ini dipergunakan untuk menampilkan gambar atau preview data yang berada di database.
- Metode : GET
- Contoh Response get-image - imageTour :

```
menampilkan gambar preview di database.
```

### Create-imageTour

```
localhost:3000/imageTour/create/
```

- Deskripsi : Permintaan ini dipergunakan untuk mengupload gambar untuk tampilan wisata dan di ambil datanya saat membuat Tour (tampilan wisata).
- Metode : POST
- Contoh Request Create-imageTour :

```
- Buka body, kemudian ke form-data
- Lalu buat key dengan nama "image" lalu ubah type nya ke file di pojok kanan teks.
- Kemudian upload gambar yang ingin di unggah, lalu tekan SEND.
```

- Contoh Response Create-imageTour :

```
{
    "data": {
        "message": "Gambar berhasil ditambahkan!"
    }
}
```

### Update-imageTour

```
localhost:3000/imageTour/update/:id
```

- Deskripsi : Permintaan ini dipergunakan untuk mengubah atau memperbaharui gambar yang ada di database berdasarkan id.
- Metode : PUT
- Contoh Request Update-imageTour :

```
- Pertama-tama masukkan endpoint id yang ingin diubah gambarnya.
- Kemudian buka body, lalu ke form-data.
- Lalu buat key dengan nama "image" lalu ubah type nya ke file di pojok kanan teks.
- Kemudian upload gambar yang ingin di unggah, lalu tekan SEND.
```

- Contoh Response Update-imageTour :

```
{
    "message": "Gambar Berhasil Diupdate!"
}
```

### Delete-imageTour

```
localhost:3000/imageTour/delete/:id
```

- Deskripsi : Permintaan ini dipergunakan untuk menghapus data berdasarkan id pada database.
- Metode : DELETE
- Contoh Response delete-imageTour :

```
{
    "data": {
        "message" : "Gambar Berhasil dihapus!"
    }
}
```

---
