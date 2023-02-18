import React from 'react'
import { FooterBar, NavigationBar, NewsForm } from '../components/index.component'

export default function CreateNews() {
  return (
    <div>
      <NavigationBar />
      <NewsForm />
      <FooterBar />
    </div>
  )
}
