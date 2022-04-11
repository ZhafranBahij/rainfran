# Diary of Rainfran

Mungkin, judulnya ini berbahasai Inggris, tapi gw coba buat pakai Indonesia agar gw sendiri bisa lebih memahaminya.
Gw buat ini memakai **Laravel** , **React JS**, dan **Tailwind CSS** . Yahhh, keduanya digabungkan dengan **Inertia JS** .

Sebelum buat _diary_-nya , jadi web ini tuh digunakan untuk menulis artikel berbau anime dan teknologi.
Yahh, hitung-hitung mencoba buat artikel.

# Proses

## Fase 01 : Preparasi

1. Install Laravel

```s
composer create-project laravel/laravel nama-projek
```

2. Install Breeze versi React JS

> Kegunaannya nanti pas registrasi atau login udah disediain dari sana.
> Selain itu, gunakan ini agar memasang react JS + Tailwind CSS sekaligus

```s
php artisan breeze:install react

npm install
npm run dev
php artisan migrate
```

3. Jalankan ini di terminal

> Jalankan kedua hal di bawah ini secara terpisah
> php artisan serve buat jalanin laravelnya
> npm run watch agar tampilannya bisa berubah saat file js-nya diubah

```s
php artisan serve
```

```s
npm run watch
```

4. Tambahkan sesuatu di file ==tailwind.config.js==

> Alasannya adalah file reactjs tuh enakkan pakai .jsx . Nahh, biar tailwind-nya bekerja di file .jsx

```s
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.js",
        "./resources/js/**/*.jsx",
    ],
```

## Fase 02 : Buat Landing Page, Login, Register

Di sini, hanya buat-buat saja, tidak ada yang perlu dipersiapkan juga sihh...

## Fase 03 : Buat sidebar admin dashboard

Niatnya mau pakai template, tapi karena belum kebayang jadinya tidak pakai.

## Fase 04 : Buat Category modal

```s
php artisan make:model --a
```

## Fase 05 : Buat Category modal
