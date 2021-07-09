import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Yith from "../../components/yith/Yith"

const GalstonIndex = () => (

  <Layout exhibit="galston">
    <Seo title="Galston Studienbuch" />

    <section className="exhibits-section">
      <div>
        <h2>The Studienbuch</h2>
        <p>At the heart of this exhibit is a unique, bound volume of a groundbreaking publication in music pedagogy
          - <Link to="/galston/studienbuch" activeClassName="active">Gottfried Galston’s Studienbuch</Link>. The exhibit
          features the first edition of the Austrian-born pianist’s German-language book (1910), accompanied by a
          specially-commissioned--and previously unpublished--English translation.</p>
        <p>In his pioneering study book, Galston provides a thorough record of his thought processes and musical
          interpretations for the works of five composers - Bach, Beethoven, Liszt, Brahms, and Chopin. </p>
      </div>
      <div>
        <Yith id="studienbuch-translation"
              mode="comparison">
          <a className="yith-expand" href="#">Expand in Viewer</a>
          <div className="yith-structure">
            <figure className="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/178"
                    data-region="525,1616,3120,2496"
                    data-canvas="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/10">>
            </figure>
            <figure className="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/736"></figure>
          </div>
        </Yith>
      </div>
    </section>

    <Yith id="sample-projection" mode="projection"
          description="Explore features of UT’s unique bound volume of Galston’s <em>Studienbuch</em> (1910)">
      <a className="yith-expand" href="#">Explore Features</a>
      <div className="yith-structure">
        <figure class="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch-guided-tour.json">
          <div class="yith-items">
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/0/annotations/1">
              <figcaption>
                <strong>The Studienbuch</strong>
                <p>Purus sit amet posuere pretium, velit est vulputate ante, non sollicitudin ipsum quam a
                  nibh.</p>
              </figcaption>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/0/annotations/2">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/498/annotations/1">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/498/annotations/2">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/498/annotations/3">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/1/annotations/1">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
          </div>
        </figure>
        <figure class="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/694">
          <figcaption>
            <strong>Galston</strong>
            <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non sollicitudin
              ipsum quam a nibh. Nullam et accumsan ligula.</p>
          </figcaption>
        </figure>
        <figure class="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/static/iiif/studienbuch-guided-tour.json">
          <div class="yith-items">
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/7/annotations/1">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/10/annotations/1">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/10/annotations/2">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/260/annotations/1">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/260/annotations/2">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
            <figure class="yith-annotation"
                    data-annotation="https://digital.lib.utk.edu/assemble/manifest/galston/178/canvas/260/annotations/3">
              <figcaption>
                <strong>Proin in tincidunt leo</strong>
                <p>Curabitur ullamcorper, purus sit amet posuere pretium, velit est vulputate ante, non
                  sollicitudin ipsum quam a nibh. Nullam et accumsan ligula.</p>
              </figcaption>
            </figure>
          </div>
        </figure>
        <figure class="yith-manifest"
                data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/703">
          <figcaption>
            <p>This postcard was glued into the Chopin section of the Studienbuch, following page 118.</p>
          </figcaption>
        </figure>
      </div>
    </Yith>

    <section className="exhibits-section">
      <div>
        <Yith id="galston-bio"
              mode="present">
          <div className="yith-structure">
            <figure className="yith-manifest"
                    data-manifest="https://digital.lib.utk.edu/assemble/manifest/galston/694"></figure>
          </div>
        </Yith>
      </div>
      <div>
        <h2>Gottfried Galston</h2>
        <p>A preeminent concert pianist of the early twentieth century, <Link to="/galston/gottfried-galston"
                                                                              activeClassName="active">Gottfried Galston
          (1879-1950)</Link> studied with leading pedagogues in Austria and Germany before embarking on a career
          distinguished not only by his virtuosic performances, but also by an innovative and insightful approach to
          piano pedagogy.</p>
      </div>
    </section>
  </Layout>

)

export default GalstonIndex
