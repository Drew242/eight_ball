Rails.application.routes.draw do
  root 'welcome#index'
  get '/auth/teamsnap/callback', to: 'sessions#create'
  get '/show', to: 'welcome#show'
  get 'logout', to: 'sessions#destroy'
end
