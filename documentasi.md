# Simpel API Doumentation Web Maluku-Explore 

Dokumentasi ini berisi tentang informasi yang anda butuhkan untuk berinteraksi dengan API Website Maluku-Explorer. Anda akan
menemukan daftar lengkap dari endpoint yang tersedia beserta detail dari permintaan dan respons yang diharapkan. Gunakan dokumentasi ini sebagai
paduan anda untuk mengintergrasikan dan menguji API Web Maluku-Explore.

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
---

## Blog
Section ini berisi permintaan terkain dengan management Blog, termasuk kedalam pembuatan, pembaharuan, pengapusan, serta pengambilan data Blog.

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
    "body" : "Papeda is a traditional dish from Maluku, a province in Indonesia. It is a staple food that holds cultural significance in the region. Papeda is made from sago starch, which is extracted from the pith ofthe sago palm tree. The preparation process involves mixing the sago starch with water and stirring it continuously until it forms a thick, glue-like consistency. The dish is typically served with various side dishes, such as fish or other seafood, along with a flavorful sauce made from ingredients like turmeric, lime leaves, and lemongrass. The accompaniments add taste and variety to the otherwise plain and starchy papeda. Papeda is known for its unique texture, which is quite different from other staple foods in Indonesia. It has a sticky and stretchy consistency, and eating it often requires using one's hands to pull and shape the papeda into bite-sized portions. This method of consumption is a cultural tradition and adds to the communal and interactive nature of sharing a meal in Maluku. The dish has deep cultural roots in Maluku and is often prepared during special occasions, celebrations, or family gatherings. Papeda reflects the rich culinary heritage of the region and showcases the use of locally available ingredients. Its preparation and consumption are not only about sustenance but also about preserving and passing down cultural practices from generation to generation.",
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
                "body": "Papeda is a traditional dish from Maluku, a province in Indonesia. It is a staple food that holds cultural significance in the region. Papeda is made from sago starch, which is extracted from the pith ofthe sago palm tree. The preparation process involves mixing the sago starch with water and stirring it continuously until it forms a thick, glue-like consistency. The dish is typically served with various side dishes, such as fish or other seafood, along with a flavorful sauce made from ingredients like turmeric, lime leaves, and lemongrass. The accompaniments add taste and variety to the otherwise plain and starchy papeda. Papeda is known for its unique texture, which is quite different from other staple foods in Indonesia. It has a sticky and stretchy consistency, and eating it often requires using one's hands to pull and shape the papeda into bite-sized portions. This method of consumption is a cultural tradition and adds to the communal and interactive nature of sharing a meal in Maluku. The dish has deep cultural roots in Maluku and is often prepared during special occasions, celebrations, or family gatherings. Papeda reflects the rich culinary heritage of the region and showcases the use of locally available ingredients. Its preparation and consumption are not only about sustenance but also about preserving and passing down cultural practices from generation to generation.",
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
        "body": "Papeda is a traditional dish from Maluku, a province in Indonesia. It is a staple food that holds cultural significance in the region. Papeda is made from sago starch, which is extracted from the pith ofthe sago palm tree. The preparation process involves mixing the sago starch with water and stirring it continuously until it forms a thick, glue-like consistency. The dish is typically served with various side dishes, such as fish or other seafood, along with a flavorful sauce made from ingredients like turmeric, lime leaves, and lemongrass. The accompaniments add taste and variety to the otherwise plain and starchy papeda. Papeda is known for its unique texture, which is quite different from other staple foods in Indonesia. It has a sticky and stretchy consistency, and eating it often requires using one's hands to pull and shape the papeda into bite-sized portions. This method of consumption is a cultural tradition and adds to the communal and interactive nature of sharing a meal in Maluku. The dish has deep cultural roots in Maluku and is often prepared during special occasions, celebrations, or family gatherings. Papeda reflects the rich culinary heritage of the region and showcases the use of locally available ingredients. Its preparation and consumption are not only about sustenance but also about preserving and passing down cultural practices from generation to generation.",
        "imageId": 1,
        "createdAt": "2023-12-24T11:23:41.000Z",
        "updatedAt": "2023-12-24T11:24:06.000Z"
    }
}
```
### Update-Blog
```
localhost:3000/blog/update/:id
```
- Deskripsi : Permintaan ini digunakan dalam memperbarui Blog yang sudah ada, berdasarkan id Blog tersebut.
- Metode : PUT
- Contoh Request :
```
{
    "title" : "Papeda food! Typical Food of Maluku Province.",
    "body" : "Papeda is a traditional dish from Maluku, a province in Indonesia. It is a staple food that holds cultural significance in the region. Papeda is made from sago starch, which is extracted from the pith ofthe sago palm tree. The preparation process involves mixing the sago starch with water and stirring it continuously until it forms a thick, glue-like consistency. The dish is typically served with various side dishes, such as fish or other seafood, along with a flavorful sauce made from ingredients like turmeric, lime leaves, and lemongrass. The accompaniments add taste and variety to the otherwise plain and starchy papeda. Papeda is known for its unique texture, which is quite different from other staple foods in Indonesia. It has a sticky and stretchy consistency, and eating it often requires using one's hands to pull and shape the papeda into bite-sized portions. This method of consumption is a cultural tradition and adds to the communal and interactive nature of sharing a meal in Maluku. The dish has deep cultural roots in Maluku and is often prepared during special occasions, celebrations, or family gatherings. Papeda reflects the rich culinary heritage of the region and showcases the use of locally available ingredients. Its preparation and consumption are not only about sustenance but also about preserving and passing down cultural practices from generation to generation.",
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

## Order
Section ini berisi terkait menagament Order, termasuk dalam pembuatan, pembaharuan, penghapusan, serta pengambilan data Order.

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
            "userId": 1
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
        "userId": 1
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
- Deskripsi : Permintaan ini digunakan dalam menghapus data Order yang sudah ada berdasarkan dari Id Order Tersebut.
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