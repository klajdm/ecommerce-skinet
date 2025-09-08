# Contributing to Skinet E-Commerce

Thank you for considering contributing to Skinet! We welcome contributions from everyone and are grateful for your help.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Coding Standards](#coding-standards)
- [Reporting Issues](#reporting-issues)
- [Feature Requests](#feature-requests)

## 📖 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

### Our Standards

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## 🚀 Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
3. Set up the development environment (see [Development Setup](#development-setup))
4. Create a new branch for your feature or bug fix
5. Make your changes
6. Test your changes thoroughly
7. Submit a pull request

## 🛠️ Development Setup

### Prerequisites

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js 18+](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- [Redis](https://redis.io/download)
- [Git](https://git-scm.com/)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/skinet.git
   cd skinet
   ```

2. **Backend setup**
   ```bash
   cd API
   dotnet restore
   dotnet ef database update
   ```

3. **Frontend setup**
   ```bash
   cd client
   npm install
   ```

4. **Start Redis** (make sure it's running on localhost:6379)

5. **Run the application**
   
   Backend:
   ```bash
   cd API
   dotnet run
   ```
   
   Frontend:
   ```bash
   cd client
   ng serve
   ```

## 🤝 How to Contribute

### Types of Contributions

- **Bug fixes** - Help us fix issues in the codebase
- **Features** - Add new functionality to the application
- **Documentation** - Improve or add documentation
- **Tests** - Add or improve test coverage
- **Performance** - Optimize existing code
- **Refactoring** - Improve code quality and maintainability

### Contribution Workflow

1. **Check existing issues** - Look for existing issues or create a new one
2. **Discuss the change** - For large features, discuss the approach first
3. **Fork and branch** - Create a feature branch from `master`
4. **Develop** - Write your code following our coding standards
5. **Test** - Ensure all tests pass and add new tests if needed
6. **Document** - Update documentation if necessary
7. **Submit PR** - Create a pull request with a clear description

## 📝 Pull Request Guidelines

### Before Submitting

- Ensure your code follows the project's coding standards
- Run all tests and ensure they pass
- Update documentation if you've changed APIs or added features
- Make sure your commits are clean and well-documented
- Rebase your branch on the latest `master` branch

### PR Requirements

- **Clear title** - Use a descriptive title that explains what the PR does
- **Detailed description** - Explain what changes you made and why
- **Issue reference** - Link to the issue your PR addresses (if applicable)
- **Screenshots** - Include screenshots for UI changes
- **Breaking changes** - Clearly mark any breaking changes

### PR Template

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update
- [ ] Refactoring
- [ ] Performance improvement

## Related Issue
Fixes #(issue number)

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots here

## Additional Notes
Any additional information about the changes
```

## 🎯 Coding Standards

### C# (.NET Backend)

- Follow [Microsoft C# Coding Conventions](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/inside-a-program/coding-conventions)
- Use meaningful variable and method names
- Add XML documentation for public APIs
- Follow SOLID principles
- Use async/await for asynchronous operations
- Implement proper error handling

**Example:**
```csharp
/// <summary>
/// Gets a product by its unique identifier.
/// </summary>
/// <param name="id">The product identifier.</param>
/// <returns>The product if found, otherwise null.</returns>
public async Task<Product?> GetProductByIdAsync(int id)
{
    return await _context.Products
        .Include(p => p.ProductType)
        .Include(p => p.ProductBrand)
        .FirstOrDefaultAsync(p => p.Id == id);
}
```

### TypeScript/Angular (Frontend)

- Follow [Angular Style Guide](https://angular.io/guide/styleguide)
- Use TypeScript strict mode
- Implement proper component lifecycle methods
- Use reactive forms over template-driven forms
- Follow the OnPush change detection strategy when possible
- Use async pipe in templates

**Example:**
```typescript
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  products$ = this.productService.getProducts();

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    // Implementation
  }
}
```

### General Guidelines

- Write clear, readable code
- Add comments for complex logic
- Use consistent naming conventions
- Keep functions and classes focused and small
- Remove unused code and imports
- Use version control effectively with clear commit messages

## 🐛 Reporting Issues

### Before Reporting

- Check if the issue already exists
- Try to reproduce the issue consistently
- Gather relevant information (OS, browser, .NET version, etc.)

### Issue Template

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
- OS: [e.g. Windows 11]
- Browser: [e.g. Chrome 91]
- .NET Version: [e.g. 8.0]
- Angular Version: [e.g. 16.2]

**Additional context**
Add any other context about the problem here.
```

## 💡 Feature Requests

We love feature requests! To suggest a new feature:

1. Check if a similar feature request already exists
2. Create a new issue with the "enhancement" label
3. Provide a clear description of the feature
4. Explain why this feature would be useful
5. Include mockups or examples if applicable

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear and concise description of what the problem is.

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.
```

## 🧪 Testing

### Running Tests

**Backend Tests:**
```bash
cd API
dotnet test
```

**Frontend Tests:**
```bash
cd client
npm test
```

### Writing Tests

- Write unit tests for all new functionality
- Include integration tests for complex features
- Use meaningful test names that describe what is being tested
- Follow the Arrange-Act-Assert pattern
- Mock external dependencies

**Example C# Test:**
```csharp
[Test]
public async Task GetProductByIdAsync_WithValidId_ReturnsProduct()
{
    // Arrange
    var productId = 1;
    var expectedProduct = new Product { Id = productId, Name = "Test Product" };
    
    // Act
    var result = await _repository.GetProductByIdAsync(productId);
    
    // Assert
    Assert.That(result, Is.Not.Null);
    Assert.That(result.Id, Is.EqualTo(productId));
}
```

## 📞 Getting Help

If you need help or have questions:

- Check the documentation in the README
- Look for existing issues and discussions
- Create a new issue with the "question" label
- Reach out to the maintainers

## 🏆 Recognition

Contributors will be recognized in our README file and release notes. We appreciate all contributions, no matter how small!

Thank you for contributing to Skinet! 🎉
