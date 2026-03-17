# MP CRM (Django + SQLAlchemy + React)

## Stack
- Backend: Django API + SQLAlchemy query layer + SQLite
- Frontend: React + TypeScript + lucide-react
- Auth: Token login

## Implemented Features
- Login API + login UI
- Tabs: `Khách hàng`, `Sản phẩm`, `Kế hoạch sản xuất`
- Products edit flow:
  - Product Specs
  - Print Images upload theo phiên bản tự tăng (`version_no = max + 1`)
- Datetime response format: `dd-mm-yyyy hh:mm:ss`

## Default Account
- Username: `mpgroup_ad`
- Password: `.Minhphuong2026`

## Run Backend (Conda)
```bash
cd /home/namng/Desktop/workspace/mpgroup.jsvn
conda create -y -n mpgroup.jsvn python=3.11
conda activate mpgroup.jsvn
pip install -r backend/requirements.txt
cd backend
python scripts/init_db.py
python manage.py runserver 0.0.0.0:2210
```

## Run Frontend
```bash
cd /home/namng/Desktop/workspace/mpgroup.jsvn/frontend
npm install
npm run dev
```

Frontend URL: `http://localhost:5173`  
Backend URL: `http://localhost:2210`

## API Quick Check
```bash
curl -s http://localhost:2210/api/health
curl -s -X POST http://localhost:2210/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"username":"mpgroup_ad","password":".Minhphuong2026"}'
```
