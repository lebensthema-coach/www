# 📋 PR Review Criteria

## 🤖 Automated Review Checklist

### Code Quality
- [ ] **HTML Validation**: No syntax errors, proper structure
- [ ] **CSS Validation**: No syntax errors, follows best practices
- [ ] **JavaScript Validation**: No syntax errors, follows coding standards
- [ ] **Markdown Validation**: Proper formatting and structure
- [ ] **File Size**: No excessively large files (>100KB)
- [ ] **Security**: No hardcoded secrets or sensitive information

### Performance
- [ ] **Loading Speed**: Page loads quickly
- [ ] **Resource Optimization**: Images and assets are optimized
- [ ] **Minification**: CSS/JS minified for production
- [ ] **Caching**: Appropriate cache headers set

### Accessibility
- [ ] **Alt Text**: All images have descriptive alt attributes
- [ ] **Heading Structure**: Proper H1-H6 hierarchy
- [ ] **Color Contrast**: Meets WCAG AA standards
- [ ] **Keyboard Navigation**: All interactive elements accessible via keyboard
- [ ] **Screen Reader**: Compatible with screen readers

### Responsive Design
- [ ] **Mobile First**: Design works on mobile devices
- [ ] **Tablet Support**: Looks good on tablet screens
- [ ] **Desktop Support**: Optimized for desktop viewing
- [ ] **Cross-Browser**: Works in major browsers (Chrome, Firefox, Safari, Edge)

### Content & Language
- [ ] **German Language**: All text properly translated
- [ ] **Grammar**: No spelling or grammatical errors
- [ ] **Consistency**: Consistent tone and style
- [ ] **Completeness**: All required content present

## 🔍 Manual Review Checklist

### Design & UX
- [ ] **Visual Appeal**: Design is professional and attractive
- [ ] **User Experience**: Intuitive and easy to navigate
- [ ] **Brand Consistency**: Matches project branding
- [ ] **Loading States**: Appropriate loading indicators

### Functionality
- [ ] **Core Features**: All main features work as expected
- [ ] **Error Handling**: Graceful error handling
- [ ] **Edge Cases**: Handles unusual inputs gracefully
- [ ] **Browser Compatibility**: Works across different browsers

### Code Standards
- [ ] **Readability**: Code is clean and well-commented
- [ ] **Maintainability**: Easy to understand and modify
- [ ] **Documentation**: Adequate documentation provided
- [ ] **Testing**: Appropriate tests included

## 🚨 Critical Issues (Must Fix)

### Security
- ❌ Hardcoded API keys or secrets
- ❌ XSS vulnerabilities
- ❌ Insecure external dependencies
- ❌ Missing input validation

### Performance
- ❌ Blocking resources
- ❌ Unoptimized images
- ❌ Excessive file sizes
- ❌ Memory leaks

### Accessibility
- ❌ Missing alt text on images
- ❌ Poor color contrast
- ❌ No keyboard navigation
- ❌ Missing ARIA labels

## ⚠️ Warnings (Should Fix)

### Code Quality
- ⚠️ Code duplication
- ⚠️ Complex functions
- ⚠️ Missing comments
- ⚠️ Inconsistent formatting

### Performance
- ⚠️ Large bundle sizes
- ⚠️ Unused CSS/JS
- ⚠️ Slow loading times
- ⚠️ Poor caching strategy

## ✅ Best Practices

### HTML
- ✅ Semantic HTML elements
- ✅ Proper DOCTYPE declaration
- ✅ Meta tags for SEO
- ✅ Proper heading hierarchy

### CSS
- ✅ Mobile-first approach
- ✅ CSS Grid/Flexbox usage
- ✅ Consistent naming convention
- ✅ No inline styles

### JavaScript
- ✅ Modern ES6+ syntax
- ✅ Proper error handling
- ✅ Modular code structure
- ✅ Performance optimizations

## 📊 Review Scoring

### Excellent (90-100%)
- All automated checks pass
- No critical or warning issues
- Follows all best practices
- Comprehensive testing

### Good (70-89%)
- Most automated checks pass
- Minor issues that don't affect functionality
- Generally follows best practices
- Adequate testing

### Needs Improvement (50-69%)
- Some automated checks fail
- Several warning issues
- Missing some best practices
- Limited testing

### Poor (Below 50%)
- Multiple automated checks fail
- Critical issues present
- Doesn't follow best practices
- No testing

## 🔄 Review Process

1. **Automated Checks**: Run all automated validation
2. **Manual Review**: Check design, functionality, and code quality
3. **Testing**: Verify all features work as expected
4. **Documentation**: Ensure adequate documentation
5. **Approval**: Approve if all criteria met, request changes if not

## 📝 Review Comments

When commenting on PRs, use these templates:

### ✅ Approval
```
✅ **Approved** - All criteria met
- Code quality: Excellent
- Performance: Good
- Accessibility: Excellent
- Ready to merge
```

### ⚠️ Request Changes
```
⚠️ **Changes Requested** - Please address the following:
- [ ] Fix critical issue: [description]
- [ ] Improve performance: [suggestion]
- [ ] Add accessibility: [requirement]
```

### 🔍 Needs Review
```
🔍 **Needs Review** - Please check:
- [ ] Security implications
- [ ] Performance impact
- [ ] Accessibility compliance
```
