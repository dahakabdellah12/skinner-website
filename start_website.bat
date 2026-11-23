@echo off
chcp 65001 >nul
title Skinner Studio - تشغيل الموقع المحلي
color 0b

echo ========================================================
echo          🚀 تشغيل موقع Skinner Studio محلياً
echo ========================================================
echo.

cd /d "C:\Users\Dahak Abdellah\Downloads\Project\BrawlCraft-Website"

echo [*] جاري تشغيل خادم التطوير (Vite)...
echo [*] سيتم فتح المتصفح تلقائياً على http://localhost:5173
echo.
echo للإنهاء في أي وقت: أغلق هذه النافذة أو اضغط Ctrl + C
echo ========================================================
echo.

start "" "http://localhost:5173"

npm run dev

pause
