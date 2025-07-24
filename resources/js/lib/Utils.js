// Fungsi sederhana untuk menggabungkan class tailwind
export function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
