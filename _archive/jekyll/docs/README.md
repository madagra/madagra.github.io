Mario Dagrada personal website powered by Github.io

### Develop locally

```shell
# install Ruby
sudo apt-get install ruby-dev
export GEM_HOME=$HOME/.gem

# install Jekyll and serve the site locally
gem install jekyll bundler
alias bundle=bundle3.0  # might not be needed
bundle install
bundle exec jekyll serve --livereload
```
