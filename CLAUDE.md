# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Jekyll-based static website using the Minimal Mistakes theme. Development requires Ruby and Jekyll.

### Setup and Local Development
```bash
# Install Ruby dependencies
sudo apt-get install ruby-dev
export GEM_HOME=$HOME/.gem

# Install Jekyll and Bundler
gem install jekyll bundler
alias bundle=bundle3.0  # might not be needed

# Install project dependencies
bundle install

# Serve locally with live reload
bundle exec jekyll serve --livereload
```

### Build Commands
```bash
# Build the site (generates _site/ directory)
bundle exec jekyll build

# Clean build artifacts
bundle exec jekyll clean
```

## Site Architecture

This is a personal portfolio website for Mario Dagrada with the following structure:

### Key Configuration
- **Theme**: Minimal Mistakes 4.24.0 with "dirt" skin
- **Main config**: `_config.yml` contains site settings, author info, and Jekyll configuration
- **Navigation**: Defined in `_data/navigation.yml` with Home, Projects, and Blog sections

### Content Structure
- **Pages**: Static pages in `_pages/` directory
  - `home.md`: Main landing page with bio and career timeline
  - `projects.md`: Collection listing page for projects
  - `blog.md`: Blog listing page
  - `career.md`: Detailed career information
  - `404.md`: Error page

- **Projects Collection**: Individual project files in `_projects/` directory
  - Each project has frontmatter with title, excerpt, permalink, number, and header image
  - Projects are sorted by the `number` field and displayed in list layout
  - Examples: qadence.md, qubec.md, turborvb.md, forecast.md

- **Assets**: 
  - Images stored in `assets/images/` with subdirectories for blog and project images
  - Custom CSS in `assets/css/main.scss` (overrides theme font sizes)
  - Files like CV stored in `assets/files/`

### Layout and Theme Customization
- Uses Jekyll Collections for projects with custom permalinks
- Custom SCSS overrides default theme font sizes (14px base, scaling up for larger screens)
- Author profile enabled on most pages
- Breadcrumbs enabled site-wide

### Content Guidelines
- Projects should include stack information as notice blocks
- Use header images and teasers for visual appeal
- Maintain consistent numbering for project ordering
- Bio content includes professional interests and technology preferences