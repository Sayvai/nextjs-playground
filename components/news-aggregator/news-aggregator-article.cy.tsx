import NewsAggregatorArticle from "./news-aggregator-article"
import layoutStyle from '../layout/layout.module.scss'
import React from "react"

function wrapMount(children: React.ReactElement) {
  cy.mount(<div className={layoutStyle.layout}><main>{children}</main></div>)
}

describe('news-aggregator-article.tsx', () => {
  it(`should render
      - with several article data elements
      - but not render the error message text element
      - when valid article data is provided`, () => {
    // given
    const article = {
      id: 15547,
      title: 'InSight teams push for more science in lander’s final months, Curiosity continues trek around Gale Crater',
      url: 'https://www.nasaspaceflight.com/2022/06/insight-curiosity-june-2022/',
      imageUrl: 'https://www.nasaspaceflight.com/wp-content/uploads/2022/06/jpegPIA25287-1170x702.jpeg',
      summary: 'In May 2022, members of NASA’s InSight Mars lander team announced that power levels on the lander were diminishing and that they expected the lander to become inoperative by December 2022. However, InSight’s teams want to push the lander to do as much as possible in its final months and have chosen to operate the lander’s seismometer for longer than previously planned.',
      publishedAt: '2022-06-25T16:42:33.000Z',
      updatedAt: '2022-06-25T19:27:56.825Z',
      newsSite: 'Space Fight News',
      featured: false,
      launches: [
        {
            id: 'df8d4fdb-9add-4ce9-9f0e-aae1c61df212',
            provider: 'Launch Library 2'
        },
        {
            id: '3b633f7e-fad9-480e-9011-f38d1bb2f932',
            provider: 'Launch Library 2'
        }
      ],
      events: [],
    }

    // when
    wrapMount(<NewsAggregatorArticle article={article} />)

    // then
    cy.get('[data-type="title"]').should('have.text', 'InSight teams push for more science in lander’s final months, Curiosity continues trek around Gale Crater')
    cy.get('[data-type="date"]').should('include.text', 'Published on 25/06/2022')
    cy.get('[data-type="summary-text"]').should('include.text', 'In May 2022, members of NASA’s InSight Mars lander team announced that power levels')

    cy.get('[data-type="error-no-article"]').should('not.exist')
  })

  it(`should render
      - an error message text
      - but not render the other main article elements
      - when article data is not provided`, () => {
    // given
    const article = undefined

    // when
    wrapMount(<NewsAggregatorArticle article={article} />)

    // then
    cy.get('[data-type="error-no-article"]').should('have.text', 'Oops. There was problem retrieiving the article..')

    cy.get('[data-type="title"]').should('not.exist')
    cy.get('[data-type="date"]').should('not.exist')
    cy.get('[data-type="summary-text"]').should('not.exist')
  })
})