<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <q-item-label
            header
            class="text-blue-8 text-h5"
          >
            Data Transaksi
          </q-item-label>
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Kode Transaksi',
          align: 'left',
          field: row => row.kodeTransaksi,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namapembeli', align: 'center', label: 'Nama Pembeli', field: 'namapembeli', sortable: true },
        { name: 'judulbuku', align: 'center', label: 'Judul Buku', field: 'judulbuku', sortable: true },
        { name: 'hargabuku', align: 'center', label: 'Harga Buku', field: 'hargabuku' },
        { name: 'jumlahbeli', align: 'center', label: 'Jumlah Beli', field: 'jumlahbeli' },
        { name: 'total', align: 'center', label: 'Total', field: 'total' }

      ],
      data: [
        {
          kodeTransaksi: 'trasn-001',
          namapembeli: 'tasya',
          judulbuku: 'Pemograman 3',
          hargaBuku: '25000',
          jumlahbeli: '2',
          total: '50000'
        },
        {
          kodeTransaksi: 'trasn-002',
          namapembeli: 'joko',
          judulbuku: 'Pemograman 3',
          hargaBuku: '25000',
          jumlahbeli: '1',
          total: '25000'
        },
        {
          kodeTransaksi: 'trasn-003',
          namapembeli: 'janson',
          judulbuku: 'prak.Pemograman 3',
          hargaBuku: '350000',
          jumlahbeli: '3',
          total: '1050000'
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
