export function myPromise(executor) {

    let then_registry = [];
    let catch_registry;
    let resolve_val;

    let state = "pending"
    function resolve(arg) {
        state = "fulfilled"
        resolve_val = arg
        setTimeout(() => {
            then_registry.forEach(listener => {
                listener(arg)
                then_registry.pop()
                return
            })
        }, 0)
    }

    function reject(arg) {
        catch_registry && catch_registry(arg) ;
    }

    executor(resolve, reject);

    return {
        then: (onResolve) => {
           then_registry.push(onResolve);

           setTimeout(() => {
            if(state === "fulfilled" && then_registry.length !== 0) {
                resolve(resolve_val);
            }
            return 
           }, 0)

           
        },
        catch: (onError) => {
            catch_registry = onError;
        }
    }
}

// following cases have been handled

// if promise executor function has asynchronous code gives appropriate output
// if promise executor function has synchronous code gives appropriate output

// if then chaining is done in asynchronous pattern