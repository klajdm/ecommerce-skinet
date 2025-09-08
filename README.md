# Skinet E-Commerce Application

A full-stack e-commerce application built with Angular and ASP.NET Core, featuring a modern, responsive design and comprehensive e-commerce functionality.

## 🚀 Features

- **Product Catalog**: Browse products with filtering, sorting, and pagination
- **Shopping Cart**: Add/remove items with persistent cart functionality using Redis
- **User Authentication**: Registration and login with JWT tokens
- **Order Management**: Complete order processing and order history
- **Payment Integration**: Stripe payment processing
- **Responsive Design**: Mobile-first design with Bootstrap
- **Admin Features**: Product and order management
- **Real-time Updates**: Modern SPA with Angular

## 🛠️ Technology Stack

### Backend
- **ASP.NET Core 8.0** - Web API framework
- **Entity Framework Core** - ORM for data access
- **SQLite** - Database for development
- **Redis** - Caching and session storage
- **AutoMapper** - Object mapping
- **Stripe** - Payment processing
- **JWT** - Authentication and authorization
- **Swagger** - API documentation

### Frontend
- **Angular 16** - Frontend framework
- **TypeScript** - Programming language
- **Bootstrap 5** - CSS framework
- **NgBootstrap** - Angular Bootstrap components
- **Font Awesome** - Icons
- **RxJS** - Reactive programming

### Architecture
- **Clean Architecture** - Separation of concerns
- **Repository Pattern** - Data access abstraction
- **Unit of Work Pattern** - Transaction management
- **Dependency Injection** - Loose coupling

## 📋 Prerequisites

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js (v18+)](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- [Redis](https://redis.io/download) (for caching)

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/klajdm/skinet.git
cd skinet
```

### 2. Backend Setup

Navigate to the API directory:
```bash
cd API
```

Restore NuGet packages:
```bash
dotnet restore
```

Update the database:
```bash
dotnet ef database update
```

Run the API:
```bash
dotnet run
```

The API will be available at `https://localhost:5001`

### 3. Frontend Setup

Navigate to the client directory:
```bash
cd client
```

Install npm packages:
```bash
npm install
```

Start the Angular development server:
```bash
ng serve
```

The application will be available at `https://localhost:4200`

### 4. Redis Setup

Make sure Redis is running on your machine. The application expects Redis to be available at `localhost:6379`.

## 📁 Project Structure

```
skinet/
├── API/                    # ASP.NET Core Web API
│   ├── Controllers/        # API controllers
│   ├── Dtos/              # Data transfer objects
│   ├── Extensions/        # Service extensions
│   ├── Helpers/           # Utility classes
│   └── Middleware/        # Custom middleware
├── Core/                  # Domain layer
│   ├── Entities/          # Domain entities
│   ├── Interfaces/        # Repository interfaces
│   └── Specifications/    # Query specifications
├── Infrastructure/        # Data access layer
│   ├── Data/             # EF Core repositories
│   ├── Identity/         # Identity implementation
│   └── Services/         # Business services
└── client/               # Angular frontend
    └── src/
        └── app/          # Angular components and services
```

## 🔧 Configuration

### Backend Configuration

Update `appsettings.json` in the API project:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Data source=skinet.db",
    "IdentityConnection": "Data source=identity.db",
    "Redis": "localhost"
  },
  "Token": {
    "Key": "your-super-secret-key-here",
    "Issuer": "https://localhost:5001"
  },
  "StripeSettings": {
    "PublishableKey": "your-stripe-publishable-key",
    "SecretKey": "your-stripe-secret-key"
  }
}
```

### Frontend Configuration

Update environment files in `client/src/environments/`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'https://localhost:5001/api/',
  stripePublishableKey: 'your-stripe-publishable-key'
};
```

## 🧪 Testing

### Backend Tests
```bash
cd API
dotnet test
```

### Frontend Tests
```bash
cd client
ng test
```

## 📦 Docker Support

Build and run with Docker Compose:

```bash
docker-compose up --build
```

## 🤝 Contributing

Contributions are welcome! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 🔒 Security

Please see our [Security Policy](SECURITY.md) for reporting security vulnerabilities.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Klajdi Murataj**
- GitHub: [@klajdm](https://github.com/klajdm)

## 🙏 Acknowledgments

- Angular team for the excellent framework
- Microsoft for ASP.NET Core
- All the open-source contributors whose packages make this project possible

## 🗺️ Roadmap

- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Multi-vendor support
- [ ] Internationalization
- [ ] Enhanced search functionality
- [ ] Wishlist feature
- [ ] Product reviews and ratings

---

⭐ Star this repo if you find it helpful!
