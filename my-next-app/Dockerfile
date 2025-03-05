# ✅ 1. `node` ベースの `builder` イメージを作成
FROM node:18-alpine AS builder

WORKDIR /app

# ✅ 2. 依存関係をインストール
RUN apk add --no-cache git bash

# ✅ 3. `package.json` と `package-lock.json` をコピーして `npm install`
COPY package.json package-lock.json ./
RUN npm install

# ✅ 4. `backend/` も含めてコピー（trpcのため）
COPY ./backend /app/backend

# ✅ 5. アプリのソースコードをコピー（これを `npm install` の後にすることでキャッシュを最適化）
COPY . .

# ✅ 6. Next.js をビルド（`WORKDIR` は `/app` のままで OK）
RUN npm run build

# ✅ 7. `runner` イメージを作成して、`builder` からビルド済みの成果物をコピー
FROM node:18-alpine AS runner
WORKDIR /app

# ✅ 8. `builder` から `/app` の内容をコピー（Next.js のビルド成果物も含む）
COPY --from=builder /app /app

# ✅ 9. `npm start` でサーバー起動
CMD ["npm", "run", "start"]
