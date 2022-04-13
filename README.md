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
php artisan make:model --all
```

Alasan memakai **--all** adalah agar terbuat juga migration, seeder, factory, policy, dan resource controller

Migration tuh nantinya berguna untuk membuat tabel di database.

Seeder dan factory tuh kegunaannya untuk membuat data _dummy_

Resource Controller dan Policy untuk membuat satu paket kontroller lengkap.

## Fase 05 : Buat Category Index dengan react table

Untuk pengoperan data dari controller kira-kira seperti ini.

```s
    public function index()
    {
        // Nantinya data yang teroper adalah categories
        return Inertia::render('Category/index', ['categories' => Category::all()]);
    }
```

Lalu, cara menampilkan datanya, contohnya seperti ini.

```s
export default function Category(props) {
    //console.log(props.categories)

    ...
}
```

Install _react-table_ , ini sangat berguna untuk _pagination_ dan _filter_

```s
npm install react-table --save
```

Ikutin langkah-langkah dari website _react-table_ yang bagian _quickstart_ . Nanti pada bagian ini diubah seperti ini

```s
export default function Category(props) {
    // const data jadi seperti ini
    const data = React.useMemo(() => props.categories, []);
    ...
}
```

Untuk _styling table_ , pakai [flowbite](https://flowbite.com/docs/components/tables/) .

Saat membuat tabel menjadi _pagination_ , lihat tutorial ini [cloudnweb](https://cloudnweb.dev/2021/06/react-table-pagination/) untuk lebih jelas. Alangkah baiknya jika mengecek codesandbox punya beliau juga.
