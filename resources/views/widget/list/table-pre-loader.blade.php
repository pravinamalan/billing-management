<section class="data-table-wrapper mb-4">
    <div class="table-action-skeleton d-flex flex-column flex-lg-row">
        <div class="search-input"></div>
        <div class="action-button-group">
            {{-- <div class="action-button"></div> --}}
            <div class="action-button"></div>
        </div>
    </div>
    <table class="table-skeleton">
        <thead>
            <tr>
              <th><div class="line"></div></th>
              <th><div class="line"></div></th>
              <th><div class="line"></div></th>
              <th><div class="line"></div></th>
              <th><div class="line"></div></th>
              <th><div class="line"></div></th>
              <th><div class="line"></div></th>
              <th><div class="line"></div></th>
            </tr>
        </thead>
        <tbody>
            @for ($i = 0; $i < 25; $i++)
                <tr>
                <td><div class="line"></div></td>
                <td><div class="line"></div></td>
                <td><div class="line"></div></td>
                <td><div class="line"></div></td>
                <td><div class="line"></div></td>
                <td><div class="line"></div></td>
                <td><div class="line"></div></td>
                <td><div class="line"></div></td>
                </tr>
            @endfor
        </tbody>
      </table>
</section>
