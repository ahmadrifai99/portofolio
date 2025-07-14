'use client';
import { useEffect } from 'react';

export default function ThemeSwitch() {
	useEffect(() => {
		// Paksa selalu pakai theme "dark"
		localStorage.setItem("theme", "dark");
		document.documentElement.setAttribute("data-bs-theme", "dark");
	}, []);

	// Tidak perlu menampilkan icon toggle karena fitur light-nya dimatikan
	return null;
}
