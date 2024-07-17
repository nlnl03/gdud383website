<template>
  <q-btn @click="showModal">
    <q-tooltip class="tool-tip"> דרכ"ש גדודי </q-tooltip>
    <q-icon
      class="info-icon"
      name="far fa-address-book"
      size="30px"
      style="color: rgb(227 238 248 / 92%)"
    />
  </q-btn>

  <q-dialog
    v-model="isModalVisible"
    @escape-key="closeModal"
    @click:outside="closeModal"
  >
    <q-card class="table-card">
      <q-card-section>
        <div class="title">דרכי קשר גדוד 383</div>

        <div class="table-wrapper">
          <table class="custom-table">
            <thead>
              <tr>
                <th>טלפון</th>
                <th>מטכ"לי</th>
                <th>טל. אדום</th>
                <th>שם</th>
                <th>תפקיד</th>
                <th>פלוגה</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in rows" :key="row">
                <td>{{ row.phone }}</td>
                <td>{{ row.telMatcali }}</td>
                <td>{{ row.telRed }}</td>
                <td>{{ row.name }}</td>
                <td>{{ row.job }}</td>
                <td>{{ row.Title }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="export-btn-wrapper">
          <q-btn
            class="export-btn"
            color="primary"
            no-caps
            @click="exportTable"
          >
            <q-icon class="export-icon" name="fas fa-file-download" />
            <span class="export-text">ייצא לאקסל</span>
          </q-btn>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import ExcelJS from "exceljs";
import axios from "axios";
export default {
  data() {
    return {
      columns: [
        {
          name: "phone",
          label: "טלפון",
          align: "center",
          field: "phone",
          sortable: true,
        },
        {
          name: "telMatcali",
          label: 'מטכ"לי',
          align: "center",
          field: "telMatcali",
          sortable: true,
        },
        {
          name: "telRed",
          label: "טל. אדום",
          align: "center",
          field: "telRed",
          sortable: true,
        },
        {
          name: "name",
          label: "שם",
          align: "center",
          field: "name",
          sortable: true,
        },
        {
          name: "job",
          label: "תפקיד",
          align: "center",
          field: "job",
          sortable: true,
        },
        {
          name: "pluga",
          label: "פלוגה",
          align: "center",
          field: "Title",
          sortable: true,
        },
      ],
      rows: [],
      visibleRows: [],
      loadingOffset: 100,
      isModalVisible: false,
      isLoading: true,
    };
  },

  methods: {
    async getContactList() {
      var res = null;
      if (this.$isSharePointUrl) {
        res = await axios.get(
          this.$sharePointUrl + "getByTitle('contactList')/items"
        );
      } else {
        res = await axios.get(this.$sharePointUrl + "contactList");
      }
      return res;
    },

    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },

    async exportTable() {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("my sheet");

      worksheet.columns = this.columns.map((col) => ({
        header: col.label,
        key: col.field,
      }));

      this.rows.forEach((row) => {
        worksheet.addRow(row);
      });

      const headerRow = worksheet.getRow(1);
      this.columns.forEach((column, colIndex) => {
        console.log(headerRow);
        headerRow._cells[colIndex].font = {
          bold: true,
          size: 17,
          color: "#e8e5e5",
        };
        headerRow._cells[colIndex].fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "2E75B6" },
        };

        headerRow._cells[colIndex].alignment = {
          vertical: "middle",
          horizontal: "center",
        };
      });
      worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
          cell.alignment = {
            vertical: "middle",
            horizontal: "center",
            wrapText: true,
          };
          if (rowNumber > 1) {
            cell.font = { bold: true, size: 13, color: "#e8e5e5" };
          }

          cell.border = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" },
          };
        });
        headerRow.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "F2F2F2" },
        };
      });

      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", "דרכי קשר גדוד 383.xlsx");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    // handleVirtualScroll(event) {
    //   const { index, from, to } = event;
    //   if (from === 0 && to === this.rows.length - 1) {
    //     this.updateVisibleRows();
    //   }
    //   if (from <= this.rows.length - this.loadingOffset && !this.isLoading) {
    //     this.updateVisibleRows();
    //   }
    // },

    // updateVisibleRows() {
    //   this.visibleRows = this.rows.slice(0, this.rows.length);
    // },
  },

  async mounted() {
    try {
      const res = await this.getContactList();
      this.rows = res.data.value;
      // this.updateVisibleRows();
      console.log(this.rows);
    } catch (error) {
      console.log("error", error);
    } finally {
      this.isLoading = false;
    }
  },
  // computed: {
  //   loadingOverlay() {
  //     return `
  //     <div class="q-table__loading absolute-full flex flex-center">
  //       <q-spinner-gears size="100px" color="primary" />
  //     </div>
  //     `;
  //   },
  // },
};
</script>

<style scoped>
.title {
  font-size: 25px;
  font-weight: 700;
  color: #595959;
  text-align: center;
  margin-bottom: 35px;
  margin-top: 15px;
}
.table-wrapper {
  background-color: #fff;
  height: 400px;
  padding-right: 10px;
  overflow: auto;
}
.custom-table {
  width: 100%;
  border-collapse: collapse;
}
.custom-table th,
.custom-table td {
  padding: 0.7em;
  text-align: center;
  width: 150px;
}
.custom-table tbody tr {
  border: 1px solid #ddd;
}
.custom-table tbody tr:last-child {
  border-bottom: 2px solid #ddd;
}
.custom-table th {
  background-color: #e8e5e5;
  color: #595959;
  font-size: 22px;
}
.custom-table tbody {
  overflow-y: auto;
  height: 300px;
  font-size: 16px;
}
.custom-table thead {
  position: sticky;
  top: 0;
  background: #f2f2f2;
}
button {
  /* margin-left: 15px; */
  margin-top: 1px;
  background: var(--timeNav-background-color);
  border: none;
}
img {
  height: 32px;
  width: 32px;
}
.tool-tip {
  font-size: 25px !important;
}
.export-btn-wrapper {
  text-align: center;
  margin-top: 36px;
  /* margin-bottom: 20px; */
  margin-right: 20px;
}
.export-btn-wrapper .q-btn {
  width: 150px;
  margin-bottom: 15px;
}
.export-text {
  position: relative;
  left: 12px;
  font-size: 16px;
}
.export-icon {
  left: 17px;
  position: absolute !important;
}
</style>
