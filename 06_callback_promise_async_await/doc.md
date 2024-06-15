JavaScript ngôn ngữ lập trình none-blocking

JavaScript là một ngôn ngữ lập trình chủ yếu dùng cho phía máy khách (client-side) và phía máy chủ (server-side) trong phát triển web. Một trong những thách thức phổ biến khi làm việc với JavaScript là xử lý dữ liệu không đồng bộ, như gửi yêu cầu mạng, đọc tệp, hoặc thực hiện các tác vụ dài hạn. Để giải quyết vấn đề này, JavaScript cung cấp ba cơ chế quan trọng: Callbacks, Promise, và async/await.

Callbacks: Callbacks là một hình thức cổ điển để xử lý không đồng bộ trong JavaScript. Chúng cho phép bạn chuyển một hàm làm tham số cho một hàm khác, và hàm này sẽ được gọi sau khi tác vụ không đồng bộ hoàn thành. Callbacks thường dẫn đến việc callback hell, khi nhiều callback lồng nhau, dẫn đến mã khó đọc và bảo trì.

Promise: Promise là một cơ chế mạnh mẽ hơn cho xử lý không đồng bộ. Promise đại diện cho một giá trị trong tương lai và cho phép bạn gắn các hành động xử lý khi giá trị đó hoàn thành hoặc thất bại. Điều này giúp tránh callback hell và làm cho mã dễ đọc hơn và dễ bảo trì hơn.

async/await: async/await là một cú pháp mới trong JavaScript giúp viết mã xử lý không đồng bộ dễ đọc hơn và dễ hiểu hơn. Khi bạn sử dụng từ khóa async, bạn có thể sử dụng await để chờ kết quả của một Promise hoặc một tác vụ không đồng bộ khác. Mã với async/await trông giống với mã đồng bộ, giúp giảm bớt sự phức tạp và làm cho mã dễ bảo trì.

Sử dụng các cơ chế này, bạn có thể hiệu quả quản lý xử lý không đồng bộ trong ứng dụng JavaScript của mình, cải thiện tính nhất quán, hiệu suất và dễ bảo trì của mã.


Asynchronous Javascript

Callback

Promise

Promise all

Async/Await

Async/Await + fetch