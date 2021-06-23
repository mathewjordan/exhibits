import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Yith from "../../components/yith/Yith"

const Chronology = () => (

  <Layout exhibit="sample">
    <Seo title="Chronology: Sample Exhibit" />

    <section className="exhibits-section">
      <div>
        <h2>Tennessee, The Early Years</h2>
        <p>Sed vitae dui ut urna suscipit lobortis id ac magna. Donec velit ex, dapibus a maximus vel, feugiat vel lacus. Maecenas maximus, lorem in aliquet ultricies, nisi metus tincidunt ligula, eget viverra massa metus at sapien. Ut ullamcorper id mauris luctus maximus. Nulla maximus lectus dui. Phasellus blandit tristique sem. Etiam et ex vel metus mattis rutrum.</p>
        <p>Cras condimentum ornare velit, nec malesuada augue efficitur a. Donec mi orci, eleifend eget laoreet sit amet, consectetur in quam. Vivamus eleifend nunc nec ante porta, et consequat est semper. Aliquam ullamcorper dui quis diam mollis, sed posuere est efficitur.</p>
        <p>Duis finibus dui lectus, id aliquam dolor ornare eu. Curabitur ut pellentesque nisi, at pretium odio.</p>
      </div>
      <div>
        <Yith id="galston-intro" mode="present">
          <div className="yith-structure">
            <figure
              className="yith-manifest"
              data-manifest="https://digital.lib.utk.edu/assemble/manifest/tenncities/472"
            ></figure>
          </div>
        </Yith>
      </div>
    </section>
    <Yith id="sample-chronology" mode="chronology" description="An untold story and the humble origins of Knoxville, Tennessee.">
      <div className="yith-structure">
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/tenncities/343"
          data-label="A Beginning"
        >Aenean congue dui lacus, vitae fringilla mi tristique at. Duis condimentum rutrum velit, eget tincidunt justo ultricies in. Aenean sit amet orci ut tellus semper sollicitudin in at sapien. </figure>
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/tenncities/340"
          data-label="Emergence"
        >Mauris convallis mattis aliquet. Maecenas aliquet lectus in massa lacinia tincidunt. Aliquam vitae semper est. Mauris sollicitudin posuere nunc in fringilla. </figure>
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/tenncities/400"
          data-label="Turn of the Century"
        >Sed vitae dui ut urna suscipit lobortis id ac magna. Donec velit ex, dapibus a maximus vel, feugiat vel lacus. Maecenas maximus, lorem in aliquet ultricies, nisi metus tincidunt ligula, eget viverra massa metus at sapien. </figure>
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/tenncities/354"
          data-label="Transition"
        >Vivamus id arcu semper, efficitur augue sed, blandit velit. Aenean diam nisl, tempor in pellentesque vitae, ornare ut lorem. Ut malesuada vitae urna nec pellentesque. Vestibulum aliquet venenatis magna, sed ornare odio mattis malesuada. Nulla facilisi. Pellentesque ac commodo enim. </figure>
        <figure
          className="yith-manifest"
          data-manifest="https://digital.lib.utk.edu/assemble/manifest/tenncities/390"
          data-label="The River"
        > Pellentesque semper risus vel erat condimentum, ut lobortis ligula sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sed tortor aliquet, pulvinar risus id, iaculis massa. </figure>
      </div>
    </Yith>

  </Layout>

)

export default Chronology
